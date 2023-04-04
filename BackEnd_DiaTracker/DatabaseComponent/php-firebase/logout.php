<?php
session_start();

// unset the session variables for the authenticated user
unset($_SESSION['verified_user_id']);
unset($_SESSION['idTokenString']);

// set the session variable to indicate that the user has been logged out
$_SESSION['status'] = "<div class='error'>Logged Out Successfully</div>";

// redirect the user to the login page
header("Location: login.php");
exit();
?>
