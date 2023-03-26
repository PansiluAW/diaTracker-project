<?php
session_start();
include('dbcon.php');

if(isset($_POST['register_now_btn']))
{
   $name=$_POST["username"];
   $email=$_POST["email"];
   $password=$_POST["password1"];
   $confirmpassword=$_POST["password2"];

   if($password !== $confirmpassword)
   {
       $_SESSION['status'] = "<div class='error'>Passwords do not match</div>";
       header("Location: register.php");
       exit();
   }
   
   if(strlen($password) < 8) 
   {
       $_SESSION['pwd_error'] = "<div class='error'>Password must be at least 6 characters long</div>";
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
