<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");
header("Access-Control-Allow-Credentials: *");
header('Content-Type: application/json');
session_start();

include('database_connection.php');
if (isset($_SESSION['verified_user_id']) && !empty($_SESSION['verified_user_id'])){
    if($_SERVER['REQUEST_METHOD'] === 'GET'){
        //FROM $_COOKIE['username'] as the table name
        $user_table_name = "user_".$_SESSION['verified_user_id'];
        $SQL_TABLE = "CREATE TABLE IF NOT EXISTS ".$user_table_name." (
            id INT(11) NOT NULL AUTO_INCREMENT,
            added_date DATE,
            sugar_data INT(200) NOT NULL,
            PRIMARY KEY (id)
        )";
        $execTableSQL = mysqli_query($conn, $SQL_TABLE);
        if (!$execTableSQL){
            exit();
        }
        $SQL_SELECT = "SELECT added_date, sugar_data  FROM (SELECT added_date, sugar_data, ROW_NUMBER() OVER (ORDER BY id DESC) AS row_num FROM ".$user_table_name.") AS temp_table WHERE row_num <= 10 ORDER BY row_num DESC";
        
        $execSQL = mysqli_query($conn,$SQL_SELECT);
        if ($execSQL){            
            $data = array();
            $data[] = ["x", "Suger Level"];
            $numRows = mysqli_num_rows($execSQL);           
            if($numRows>0){
                while($row = mysqli_fetch_array($execSQL)){
                    $data[] = array($row['added_date'], (int)$row['sugar_data']);
                }
            
            }else{                
                $data[] = [0,0];
            }
            // echo json_encode($_SESSION['verified_user_id']);
            echo json_encode($data);
        }else{
            exit();
        }
        // $arrayp = mysqli_fetch_array($execSQL);  
        // echo json_encode($data);
    }
    mysqli_close($conn);
    // echo json_encode($arrayp);
}else{
    header('Location:  http://localhost/diaTracker-project/BackEnd_DiaTracker/DatabaseComponent/php-firebase/login.php');
}
?>