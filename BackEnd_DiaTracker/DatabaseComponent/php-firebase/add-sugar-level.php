<?php
// retrieve the form data
$date = $_POST['date'];
$time = $_POST['time'];
$value = $_POST['value'];
$username = $_POST['username'];

// connect to the database
$dbhost = 'localhost';
$dbuser = 'root';
$dbpass = '';
$dbname = 'sugar_tracker';
$conn = new mysqli($dbhost, $dbuser, $dbpass, $dbname);

// check for errors
if ($conn->connect_error) {
    die('Connection failed: ' . $conn->connect_error);
}

// prepare the SQL statement
$stmt = $conn->prepare("INSERT INTO diabetic_sugar_levels (date, time, value, username) VALUES (?, ?, ?, ?)");
$stmt->bind_param("ssss", $date, $time, $value, $username);

// execute the statement
if ($stmt->execute()) {
    echo "Record added successfully";
} else {
    echo "Error: " . $stmt->error;
}

// close the database connection
$stmt->close();
$conn->close();
?>