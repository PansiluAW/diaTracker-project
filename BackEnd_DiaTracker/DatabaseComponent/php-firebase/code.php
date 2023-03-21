<?php
session_start();
include('dbcon.php');

if(isset($_POST['register_now_btn']))
{
   $name=$_POST["username"];
   $email=$_POST["email"];
   $password=$_POST["password1"];
   $confirmpassword=$_POST["password2"];

   if($password !== $confirmpassword)
   {
       $_SESSION['status'] = "<div class='error'>Passwords do not match</div>";
       header("Location: register.php");
       exit();
   }
   
   if(strlen($password) < 6) 
   {
       $_SESSION['pwd_error'] = "<div class='error'>Password must be at least 6 characters long</div>";
       header("Location: register.php");
       exit();
   }



   $userProperties = [
    'email' => $email,
    'emailVerified' => false,
    'password' => $password,
    'displayName' => $name,
];

$createdUser = $auth->createUser($userProperties);
if($createdUser)
{
    $_SESSION['status'] = "<div class='error'>User created Successfully</div>";
    header("Location: register.php");
}
else
{
    $_SESSION['status'] = "<div class='error'>User not Created</div>";
    header("Location: register.php");
}
}



//Delete Record
if(isset($_POST['delete_btn']))
{
    $id = $_POST['id_key'];
    $ref_table = "contacts/".$id;
    $deleteData = $database->getReference($ref_table)->remove();

    if($deleteData)
    {
        $_SESSION['status'] = "Data Deleted Successfully";
        header("Location: index.php");
    }
    else
    {
        $_SESSION['status'] = "Data Not Deleted";
        header("Location: index.php");
    }
}

//Update Record
if(isset($_POST['update_data']))
{
    $id = $_POST['id'];
    $username = $_POST['username'];
    $email = $_POST['email'];

    $updateData = [
        "username" => $username,
        "email" => $email,
    ];

    $ref_table = "contacts/".$id;
    $updatequery = $database->getReference($ref_table)->update($updateData);

    if($updatequery)
    {
        $_SESSION['status'] = "Data Updated Successfully";
        header("Location: index.php");
    }
    else
    {
        $_SESSION['status'] = "Data Not Updated";
        header("Location: index.php");
    }
}

//Insert Record
if(isset($_POST['save_data']))
{
    $username = $_POST['username'];
    $email = $_POST['email'];

    $postData = [
        "username" => $username,
        "email" => $email,
    ];

    $ref_table = "contacts";
    $postRef = $database->getReference($ref_table)->push($postData);

    if($postRef)
    {
        $_SESSION['status'] = "Data Inserted Successfully";
        header("Location: add-contact.php");
    }
    else
    {
        $_SESSION['status'] = "Data Not Inserted";
        header("Location: add-contact.php");
    }
}
?>