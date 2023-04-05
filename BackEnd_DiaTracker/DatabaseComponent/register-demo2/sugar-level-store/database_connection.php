<?php
//set the database connection parameters
$dbhost = "localhost";
$dbuser = "root";
$dbpass = "";
$dbname = "diatracker_user_sugar_data";
$dbServerPort = 15230; //server port number, which is optional for now

#connect to the MySQL database
$conn = mysqli_connect($dbhost,$dbuser, $dbpass, $dbname);
if (!$conn){ // check for the connection status for validations
    echo '<script type="text/javascript">';
    echo 'alert("Failed to connect to database: ' . mysqli_connect_error() . '")';
    echo '</script>';
}
mysqli_select_db($conn, $dbname) // select the database to be used in the project procedures
?>
