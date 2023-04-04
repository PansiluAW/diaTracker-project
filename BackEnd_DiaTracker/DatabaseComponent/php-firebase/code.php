<?php
session_start();
include('dbcon.php');

// Check if the Register button has been pressed
if(isset($_POST['register_now_btn']))
{
   $name=$_POST["username"];
   $email=$_POST["email"];
   $password=$_POST["password1"];
   $confirmpassword=$_POST["password2"];
   
   // Verify reCAPTCHA response
   $response = $_POST['g-recaptcha-response'];
   $url = 'https://www.google.com/recaptcha/api/siteverify';
   $data = array(
       'secret' => '6Le40FklAAAAAPKmNcILR5lxqhXoxWwLozY7dktx',
       'response' => $response
   );
   $options = array(
       'http' => array (
           'method' => 'POST',
           'content' => http_build_query($data)
       )
   );
   $context  = stream_context_create($options);
   $verify = file_get_contents($url, false, $context);
   $captcha_success = json_decode($verify);

   if (!$captcha_success->success) {
       // reCAPTCHA verification failed
       $_SESSION['status'] = "<div class='error'>reCAPTCHA verification failed</div>";
       header("Location: register.php");
       exit();
   }

   // Check if passwords match
   if($password !== $confirmpassword)
   {
       $_SESSION['status'] = "<div class='error'>Passwords do not match</div>";
       header("Location: register.php");
       exit();
   }
   
   // Check if password is at least 8 characters long
   if(strlen($password) < 8) 
   {
       $_SESSION['pwd_error'] = "<div class='error'>Password must be at least 8 characters long</div>";
       header("Location: register.php");
       exit();
   }

 // Check if email already exists in Firebase
try {
    $user = $auth->getUserByEmail($email);
    if ($user) {
        $_SESSION['status'] = "<div class='error'>User with this email already exists</div>";
        header("Location: register.php");
        exit();
    }
 } catch (Kreait\Firebase\Exception\Auth\UserNotFound $e) {
    // User does not exist, continue with registration
 }
 
 // Register new user
 $newUser = $auth->createUserWithEmailAndPassword($email, $password);
 
 if ($newUser) {
    // User successfully registered
    $_SESSION['status'] = "<div class='error'>User registration successful</div>";
    header("Location: login.php");
    exit();
 } else {
    // Registration failed
    $_SESSION['status'] = "<div class='error'>User registration failed</div>";
    header("Location: register.php");
    exit();
 }
}

?>
