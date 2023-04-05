<?php
//set headers to allow cross origin resource sharing and other needful when sending requests between endpoints
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");
header("Access-Control-Allow-Credentials: true");

//start session and include database connection file
session_start();
//database connection script
include('database_connection.php');

// check if the user is authenticated
if (isset($_SESSION['verified_user_id'])){
    $user_table_name = "user_".$_SESSION['verified_user_id']; //set user table name
    //creat table if not exists in the database
    $SQL_TABLE = "CREATE TABLE IF NOT EXISTS $user_table_name (
        id INT(11) NOT NULL AUTO_INCREMENT,
        added_date DATE,
        sugar_data INT(200) NOT NULL,
        PRIMARY KEY (id)
    )";
    $execSQL = mysqli_query($conn, $SQL_TABLE);
    if ($execSQL){
        //alert user if user table was created successfully
        echo '<script type="text/javascript">';
        echo 'alert("Data Successfully entered into the system")';
        echo '</script>';
        exit();
    }else{
        //alert user if any error occured during creation of the user table
        echo '<script type="text/javascript">';
        echo 'alert("Urgh...an unexpected error occured")';
        echo '</script>';
    }
    //check for the request method if it's POST
    if ($_SERVER['REQUEST_METHOD'] === 'POST'){
        // $last_index = count($_POST)-1;
        // $last_update = $_POST[$last_index];

        //retrieve data from the post request
        $data = json_decode(file_get_contents("php://input"), true);
        $date = $data['date'];
        $sugar_data = $data['currentInput'];
        // $date = $_POST['date'];
        // $sugar_data = $_POST['date'];
        
        //insert data into the user table
        // $sugar_data = json_decode(file_get_contents(""))
        $SQL_INSERT = "INSERT INTO $user_table_name (added_date,sugar_data)
        VALUES ('$date', '$sugar_data')";

        if (mysqli_query($conn,$SQL_INSERT)){
            //notify user if data was inserted successfully
            echo '<script type="text/javascript">';
            echo 'alert("Data Successfully entered into the system")';
            echo '</script>';   
        }else{
            //notify user if any error occurred while inserting data
            echo '<script type="text/javascript">';
            echo 'alert("Urgh...an unexpected error occured")';
            echo '</script>';
            exit();
        }
    }
    mysqli_close($conn); //close connection with the database 
}else{
    //redirect user to the login page if not authenticated
    header('Location:  http://localhost/diaTracker-project/BackEnd_DiaTracker/DatabaseComponent/php-firebase/login.php');
}
?>