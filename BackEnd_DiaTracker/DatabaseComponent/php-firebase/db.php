<?php
    // Enter host name, database username, password, and database name.
    $servername = "localhost";
    $username = "username";
    $password = "";
    $dbname = "NotifySystem";
    
    $con = mysqli_connect("localhost","root","","NotifySystem");
    // Check connection
    if (mysqli_connect_errno()){
        echo "Failed to connect to MySQL: " . mysqli_connect_error();
    }
?>
