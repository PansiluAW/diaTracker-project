<?php
    // Enter  host name, database username, password, and database name.
    $servername = "localhost";
    $username = "username";
    $password = "";
    $dbname = "LoginSystem";
    
    $con = mysqli_connect("localhost","root","","LoginSystem");
    // Check connection
    if (mysqli_connect_errno()){
        echo "Failed to connect to MySQL: " . mysqli_connect_error();
    }
?>
