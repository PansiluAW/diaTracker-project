<?php
include('database_connection.php');
if (isset($_COOKIE['username'])){
    $SQL_TABLE = "CREATE TABLE IF NOT EXISTS $_COOKIE['username'] (
        data DATE,
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

    $sugar_data = json_decode(file_get_contents(""))
    $SQL_INSERT = "INSERT INTO $_COOKIE['username'](sugar_data)
    VALUES ('$data, $sugar_data')"

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