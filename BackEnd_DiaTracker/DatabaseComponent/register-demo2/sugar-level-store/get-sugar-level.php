<?php
include('database_connection.php');
if (isset($_COOKIE['username'])){
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
    
    mysqli_close($conn);
}else{
    header('Location:  ../save_data/login.php')
}
?>