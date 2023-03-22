<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

include('database_connection.php');
// if (isset($_COOKIE['username'])){
    if($_SERVER['REQUEST_METHOD'] === 'GET'){
        //FROM $_COOKIE['username'] as the table name
        $SQL_SELECT = "SELECT added_date, sugar_data  FROM (SELECT added_date, sugar_data, ROW_NUMBER() OVER (ORDER BY id DESC) AS row_num FROM hello) AS temp_table WHERE row_num <= 10 ORDER BY row_num DESC";

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
            echo json_encode($data);  
        }else{
            echo '<script type="text/javascript">';
            echo 'alert("Urgh...an unexpected error occured")';
            echo '</script>';
        }
        // $arrayp = mysqli_fetch_array($execSQL);  
        // echo json_encode($data);
    }
    mysqli_close($conn);
    // echo json_encode($arrayp);
// }else{
//     header('Location:  ../save_data/login.php')
// }
?>