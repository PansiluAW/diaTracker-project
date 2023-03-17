<?php
$dbhost = "mysql-116190-0.cloudclusters.net";
$dbuser = "admin";
$dbpass = "4bLpYyxW";
$dbname = "diatracker_user_sugar_data";
$dbServerPort = 15230;


$conn = mysqli_connect($dbhost, $dbServerPort,$dbuser, $dbpass, $dbname);
if (!$conn){
    echo '<script type="text/javascript">';
    echo 'alert("Urgh...an unexpected error occured")';
    echo '</script>';
}
?>B