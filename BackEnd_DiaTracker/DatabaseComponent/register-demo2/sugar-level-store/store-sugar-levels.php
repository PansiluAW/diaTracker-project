<?php
include('database_connection.php');
if (isset($_COOKIE['username'])){
    $SQL_TABLE = "CREATE TABLE IF NOT EXISTS $_COOKIE['username'] (
        entry_no INT(1000) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
        sugar_data INT(1000) NOT NULL
    )";

    if (mysqli_query($conn, $SQL_TABLE)){
        echo '<script type="text/javascript">';
        echo 'alert("Data Successfully entered into the system")';
        echo '<scipt>';
    }else{
        echo '<script type="text/javascript">';
        echo 'alert("Urgh...an unexpected error occured")';
        echo '<scipt>';
    }else{
    }

    $SQL_INSERT = "INSERT INTO $_COOKIE['username'](sugar_data)
    VALUES ('$sugar_data')"

    if (mysqli_query($conn,$SQL_INSERT)){
        echo '<script type="text/javascript">';
        echo 'alert("Data Successfully entered into the system")';
        echo '<scipt>';   
    }else{
        echo '<script type="text/javascript">';
        echo 'alert("Urgh...an unexpected error occured")';
        echo '<scipt>';
    }
    mysqli_close($conn);
}else{
    header('Location:  ../save_data/login.php')
}
?>