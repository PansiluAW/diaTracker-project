<?php
include('database_connection.php');
// if (isset($_COOKIE['username'])){
    $SQL_TABLE = "CREATE TABLE IF NOT EXISTS hello (
        added_date DATE,
        sugar_data INT(200) NOT NULL
    )";

    $execSQL = mysqli_query($conn, $SQL_TABLE);
    if ($execSQL){
        echo '<script type="text/javascript">';
        echo 'alert("Data Successfully entered into the system")';
        echo '</script>';
    }else{
        echo '<script type="text/javascript">';
        echo 'alert("Urgh...an unexpected error occured")';
        echo '</script>';
    }
    if ($_SERVER['REQUEST_METHOD'] === 'POST'){
        $last_update = end($_POST);
        $date = $last_update['date'];
        $sugar_data = $last_update['currentInput'];

        echo '<script type="text/javascript">';
        echo 'alert("'.$date[1].'")';
        echo '</script>'; 

        // $sugar_data = json_decode(file_get_contents(""))
        $SQL_INSERT = "INSERT INTO hello(added_date,sugar_data)
        VALUES ('$date', '$sugar_data')";

        if (mysqli_query($conn,$SQL_INSERT)){
            echo '<script type="text/javascript">';
            echo 'alert("Data Successfully entered into the system")';
            echo '</script>';   
        }else{
            echo '<script type="text/javascript">';
            echo 'alert("Urgh...an unexpected error occured")';
            echo '</script>';
        }
    }
    mysqli_close($conn);
// }else{
//     header('Location:  ../save_data/login.php')
// }
?>