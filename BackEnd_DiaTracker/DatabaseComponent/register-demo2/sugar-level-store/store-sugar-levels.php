<?php
header("Access-Control-Allow-Origin: http://localhost:3000/");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");
header("Access-Control-Allow-Credentials: true");


session_start();
include('database_connection.php');
if (isset($_SESSION['verified_user_id'])){
    $user_table_name = "user_".$_SESSION['verified_user_id'];
    $SQL_TABLE = "CREATE TABLE IF NOT EXISTS $user_table_name (
        id INT(11) NOT NULL AUTO_INCREMENT,
        added_date DATE,
        sugar_data INT(200) NOT NULL,
        PRIMARY KEY (id)
    )";
    $execSQL = mysqli_query($conn, $SQL_TABLE);
    if ($execSQL){
        echo '<script type="text/javascript">';
        echo 'alert("Data Successfully entered into the system")';
        echo '</script>';
        exit();
    }else{
        echo '<script type="text/javascript">';
        echo 'alert("Urgh...an unexpected error occured")';
        echo '</script>';
    }
    if ($_SERVER['REQUEST_METHOD'] === 'POST'){
        // $last_index = count($_POST)-1;
        // $last_update = $_POST[$last_index];
        $data = json_decode(file_get_contents("php://input"), true);
        $date = $data['date'];
        $sugar_data = $data['currentInput'];
        // $date = $_POST['date'];
        // $sugar_data = $_POST['date'];
        
        // $sugar_data = json_decode(file_get_contents(""))
        $SQL_INSERT = "INSERT INTO $user_table_name (added_date,sugar_data)
        VALUES ('$date', '$sugar_data')";

        if (mysqli_query($conn,$SQL_INSERT)){
            echo '<script type="text/javascript">';
            echo 'alert("Data Successfully entered into the system")';
            echo '</script>';   
        }else{
            echo '<script type="text/javascript">';
            echo 'alert("Urgh...an unexpected error occured")';
            echo '</script>';
            exit();
        }
    }
    mysqli_close($conn);
}else{
    header('Location:  http://localhost/diaTracker-project/BackEnd_DiaTracker/DatabaseComponent/php-firebase/login.php');
}
?>