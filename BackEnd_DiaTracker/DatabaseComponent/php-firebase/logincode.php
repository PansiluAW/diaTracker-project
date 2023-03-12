<?php

session_start();
include("dbcon.php");

if(isset($_POST['login_now_btn']))
{
    $email = $_POST['email'];
    $clearTextPassword = $_POST['password'];

    try {
        $user = $auth->getUserByEmail($email);
        $signInResult = $auth->signInWithEmailAndPassword($email, $clearTextPassword);
        $idTokenString = $signInResult->idToken();

        try {
            $verifiedIdToken = $auth->verifyIdToken($idTokenString);
            $uid = $verifiedIdToken->claims()->get('sub');
            

            $_SESSION['verified_user_id'] =$uid;
            $_SESSION['idTokenString'] =$idTokenString;

            $_SESSION['status'] = "You are Logged in Successfully";
            header("Location: home.php");
            exit();

        } catch (FailedToVerifyToken $e) {
            echo 'The token is invalid: '.$e->getMessage();
        }

    } catch (\Kreait\Firebase\Exception\Auth\UserNotFound $e) {
        //echo $e->getMessage();
        $_SESSION['status'] = "<div class='error'>No Email Found</div>";
        header("Location: login.php");
        exit();
    } catch (\Kreait\Firebase\Auth\SignIn\FailedToSignIn $e) {
        $_SESSION['status'] = "<div class='error'>Invalid Email or Password</div>";
        header("Location: login.php");
        exit();
    }
}
?>