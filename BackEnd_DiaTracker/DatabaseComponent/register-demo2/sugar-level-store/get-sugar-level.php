<?php
// header("Access-Control-Allow-Origin: *");
// header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
// header("Access-Control-Allow-Header: Content-Type, Authorization");

include('database_connection.php');
if (isset($_COOKIE['username'])){
    if($_SERVER['REQUEST_METHOD'] == 'GET'){
        $SQL_SELECT = "SELECT sugar_data FROM $_COOKIE['username'] ORDER BY entry_no DESC LIMIT 10";

        $execSQL = mysqli_query($conn,$SQL_SELECT);

        if ($execSQL){
            echo '<script type="text/javascript">';
            echo 'alert("Data Successfully retireved into the system")';
            echo '<scipt>';   
        }else{
            echo '<script type="text/javascript">';
            echo 'alert("Urgh...an unexpected error occured")';
            echo '<scipt>';
        }

        $arrayp = mysqli_fetch_array($execSQL)    
        echo json_encode($data)
    }
    mysqli_close($conn);
    // echo json_encode($arrayp);
}else{
    header('Location:  ../save_data/login.php')
}
?>