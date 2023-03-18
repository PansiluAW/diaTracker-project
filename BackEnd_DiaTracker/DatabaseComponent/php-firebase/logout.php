<?php
session_start();

unset($_SESSION['verified_user_id']);
unset($_SESSION['idTokenString']);

$_SESSION['status'] = "<div class='error'>Logged Out Successfully</div>";
header("Location: login.php");
exit();
?>