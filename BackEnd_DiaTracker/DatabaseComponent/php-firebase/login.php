<?php
session_start();  
if(isset($_SESSION['verified_user_id'])) {
    $_SESSION['status'] = "You are already Logged in ";

     // set a cookie to remember the user
     setcookie('remember_me', $user['id'], time() + (86400 * 30), "/"); // set for 30 days
    header("Location: home.php");
    exit();
}

include('includes/header.php');
// if(!isset($_COOKIE['verified_user_id'])) {
    // CODE GOES HERE
// }else {
//     header("Location: home.php");
// }

?>
<div class="loader"></div>
    <!-- This div is for the login form -->
    <div class="mainbox">
        <img src="diatracker-logo-transparent.png" alt="diatracker-logo" width="600" class="logo">
        </div>
<div class="container">
        <div class="row justify-content-center">
            <div class="col-md-5 mt-5">

            <?php
                if(isset($_SESSION['status']))
                {
                    echo "<h4 class='alert alert-success'>".$_SESSION['status']."</h4>";
                    unset($_SESSION['status']);
                }
                ?>

                <div class="box">
                    <div class="card-header">
                        <h1>Login Here!</h1>
                </div>
                <div class="card-body">
                    <form action="logincode.php" method="POST">
                        <div class="form-group-mb-3">
                        <p>Email</p>
                            <input type="email" name="email" class="form-control" placeholder="Enter Email Address" required="">
                        </div>
                        <br>
                        <div class="form-group-mb-3">
                        <p>Password</p>
                            <input type="password" name = "password" class="form-control" placeholder="Enter Password" required="">
                        </div>
                        <br>
                        <div class="form-group-mb-3 text-center">
                        <input type="submit" name="login_now_btn" class="btn btn-primary" value="Login"></input>
                        </div>
                        <br>
                        <script src="loading.js"></script>
                <p class="text-center">Don't have an account? <a href="register.php">Sign Up</a></p>
                </div>
    

                <?php
                // check if password is incorrect and display error message
                if(isset($_SESSION['status']) && $_SESSION['status'] == 'Password is incorrect') {
                    echo "<h4 class='alert alert-danger'>Password is incorrect</h4>";
                    unset($_SESSION['status']);
                }
                ?>

            </form>
        </div>    
    </div>
    </div>
</div>
<?php
include("includes/footer.php");
?>

