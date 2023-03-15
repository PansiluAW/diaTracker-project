<?php
$dbhost = "localhost";
$dbuser = "root";
$dbpass = "";
$dbname = "diatracker_user_sugar_data";


$conn = mysqli_connect($dbhost,$dbuser, $dbpass, $dbname)
if (!$conc){
    echo '<script type="text/javascript">';
    echo 'alert("Urgh...an unexpected error occured")';
    echo '<scipt>';
}
mysqli_select_db($conn,$dbname)
?>