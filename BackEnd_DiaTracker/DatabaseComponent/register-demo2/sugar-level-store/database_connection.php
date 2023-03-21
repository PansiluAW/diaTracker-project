<?php
$dbhost = "localhost";
$dbuser = "root";
$dbpass = "";
$dbname = "diatracker_user_sugar_data";
$dbServerPort = 15230;

$conn = mysqli_connect($dbhost,$dbuser, $dbpass, $dbname);
if (!$conn){
    echo '<script type="text/javascript">';
    echo 'alert("Failed to connect to database: ' . mysqli_connect_error() . '")';
    echo '</script>';
}
mysqli_select_db($conn, $dbname)
?>
