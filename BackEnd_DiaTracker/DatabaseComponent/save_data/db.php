<?php
    // Enter  host name, database username, password, and database name.
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "diaTracker_login_system";
    
    $con = mysqli_connect($servername, $username, $password, $dbname);
    // Check connection
    if (mysqli_connect_errno()){
        echo '<script type="text/javascript">';
        echo 'alert("Urgh...an unexpected error occured")';
        echo '<scipt>';
    }
?>
