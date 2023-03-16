<?php
$dbhost = "localhost";
$dbuser = "root";
$dbpass = "";
$dbname = "diatracker_user_sugar_data";


$conn = mysqli_connect($dbhost,$dbuser, $dbpass, $dbname, $dbname)
if (!$conn){
    echo '<script type="text/javascript">';
    echo 'alert("Urgh...an unexpected error occured")';
    echo '<scipt>';
}
?>