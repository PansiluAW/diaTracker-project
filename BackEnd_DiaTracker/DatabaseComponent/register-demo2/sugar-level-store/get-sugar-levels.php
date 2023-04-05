<?php
//set headers to allow cross origin resource sharing and other needful when sending requests between endpoints
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");
header("Access-Control-Allow-Credentials: true");
header('Content-Type: application/json');
session_start();

//database connection script
include('database_connection.php');

//Check for a verified user ID that is set or else if it's not empty
if (isset($_SESSION['verified_user_id']) && !empty($_SESSION['verified_user_id'])){
    if($_SERVER['REQUEST_METHOD'] === 'GET'){ //check for request method is set for a GET.
        //FROM $_COOKIE['username'] as the table name
        $user_table_name = "user_".$_SESSION['verified_user_id']; //set the database table name
        //set the SQL query to create the user's table if it doesn't exist in the database
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

        //set the SQL query to select the 10 most recent entries from the user's sugar data table
        $SQL_SELECT = "SELECT added_date, sugar_data  FROM (SELECT added_date, sugar_data, ROW_NUMBER() OVER (ORDER BY id DESC) AS row_num FROM ".$user_table_name.") AS temp_table WHERE row_num <= 10 ORDER BY row_num DESC";
        
        //Execute the SQL statement to get the data from the user's table
        $execSQL = mysqli_query($conn,$SQL_SELECT);
        if ($execSQL){            
            $data = array();
            $data[] = ["x", "Suger Level"]; //add the common column header
            $numRows = mysqli_num_rows($execSQL);           
            if($numRows>0){
                //Add the retrieved data from the database table to the data array.
                while($row = mysqli_fetch_array($execSQL)){
                    $data[] = array($row['added_date'], (int)$row['sugar_data']);
                }
            
            }else{                
                $data[] = [0,0]; //add the default set data if no value exist in the user's table
            }
            // echo json_encode($_SESSION['verified_user_id']);
            echo json_encode($data); //encode the data array as a response to the request in the form of JSON.
        }else{
            exit();
        }
        // $arrayp = mysqli_fetch_array($execSQL);  
        // echo json_encode($data);
    }
    mysqli_close($conn);// close database connection
    // echo json_encode($arrayp);
}else{
    header('Location:  http://localhost/diaTracker-project/BackEnd_DiaTracker/DatabaseComponent/php-firebase/login.php');
}
?>