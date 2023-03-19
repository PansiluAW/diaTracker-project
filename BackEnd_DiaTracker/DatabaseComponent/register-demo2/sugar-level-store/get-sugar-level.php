<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

include('database_connection.php');
// if (isset($_COOKIE['username'])){
    if($_SERVER['REQUEST_METHOD'] == 'GET'){
        //FROM $_COOKIE['username'] as the table name
        $SQL_SELECT = "SELECT sugar_data  FROM hello ORDER BY added_date DESC LIMIT 10";

        $execSQL = mysqli_query($conn,$SQL_SELECT);

        if ($execSQL){
            echo '<script type="text/javascript">';
            echo 'alert("Data Successfully retireved into the system")';
            echo '</script>';   
        }else{
            echo '<script type="text/javascript">';
            echo 'alert("Urgh...an unexpected error occured")';
            echo '</script>';
        }

        $arrayp = mysqli_fetch_array($execSQL)    
        echo json_encode($data)
    }
    mysqli_close($conn);
    // echo json_encode($arrayp);
// }else{
//     header('Location:  ../save_data/login.php')
// }
?>