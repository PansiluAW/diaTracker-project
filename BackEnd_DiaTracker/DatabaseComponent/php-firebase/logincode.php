<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");
session_start();

// include the database connection file
include("dbcon.php");


// check if the login form has been submitted
if(isset($_POST['login_now_btn']))
{
    // retrieve the email and password from the form
    $email = $_POST['email'];
    $clearTextPassword = $_POST['password'];

    try {
        // get the user with the given email
        $user = $auth->getUserByEmail($email);
        
        // try to sign in the user with the given email and password
        $signInResult = $auth->signInWithEmailAndPassword($email, $clearTextPassword);
        
        // get the ID token string
        $idTokenString = $signInResult->idToken();

        try {
            // verify the ID token
            $verifiedIdToken = $auth->verifyIdToken($idTokenString);
            // get the user ID from the token claims
            $uid = $verifiedIdToken->claims()->get('sub');
            // get the user record for the authenticated user
            $userRecord = $auth->getUser($uid);
            // get the display name of the user
            $displayName = $userRecord->displayName;

            // set the session variables
            $_SESSION['verified_user_id'] =$uid;
            $_SESSION['idTokenString'] =$idTokenString;

            $_SESSION['status'] = "<div class='error'>You are Logged in Successfully</div>";
            $_SESSION['username'] = $displayName;
            echo "User ID: {$_SESSION['verified_user_id']}";
            
            // redirect the user to the home page
            header("Location: http://localhost:3000");
            exit();

        } catch (Exception $e) {
            echo 'The token is invalid: '.$e->getMessage();
        }
    } catch (\Kreait\Firebase\Exception\Auth\UserNotFound $e) {
        // if the user is not found, display an error message
        //echo $e->getMessage();
        $_SESSION['status'] = "<div class='error'>No Email Found</div>";
        header("Location: login.php");
        exit();
    } catch (\Kreait\Firebase\Auth\SignIn\FailedToSignIn $e) {
        // if the sign-in fails, display an error message
        $_SESSION['status'] = "<div class='error'>Invalid Email or Password</div>";
        header("Location: login.php");
        exit();
    }
}
?>
