<?php
session_start();
include('dbcon.php');

use Firebase\Auth\Token\Exception\InvalidToken;

// Check if user is logged in and has a valid ID token
if(isset($_SESSION['verified_user_id']))
{

  // Get the user ID and ID token from session variables
  $uid = $_SESSION["verified_user_id"];
  $idToken = $_SESSION["idTokenString"];

try {
    // Verify the ID token with Firebase Auth
    $verifiedIdToken = $auth->verifyIdToken($idToken);

} catch (InvalidToken $e) {
    // If the token is invalid or expired, redirect the user to the logout page
    echo 'The token is invalid: '.$e->getMessage();   
    $_SESSION['status'] = "The token is invalid or Expired/ Login Again";
    header("Location: logout.php");
    exit();


} catch (\InvalidArgumentException $e) {
    // If the token cannot be parsed, output an error message
    echo 'The token could not be parsed: '.$e->getMessage();
}

}
else
{
    // If the user is not logged in, redirect to the login page
    $_SESSION['status'] = "<div class='error'>Login to access All Pages</div>";
    header("Location: login.php");
    exit();
}

?>
