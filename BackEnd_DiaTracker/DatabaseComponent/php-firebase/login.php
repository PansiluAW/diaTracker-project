<?php
session_start();  
if(isset($_SESSION['verified_user_id'])) {
    $_SESSION['status'] = "You are already Logged in ";
    header("Location: home.php");
    exit();
}

include('includes/header.php');

?>
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

                <div class="card mt-4">
                    <div class="card-header">
                        <h5>Welcome Back!</h5>
                </div>
                <div class="card-body">
                    <form action="logincode.php" method="POST">
                        <div class="form-group-mb-3">
                            
                            <input type="email" name="email" class="form-control" placeholder="Enter Email Address" required="">
                        </div>
                        <br>
                        <div class="form-group-mb-3">
                            
                            <input type="password" name = "password" class="form-control" placeholder="Enter Password" required="">
                        </div>
                        <br>
                        <div class="form-group-mb-3 text-center">
                        <button type="submit" name="login_now_btn" class="btn btn-primary" >Sign Up</button>
                        </div>
                        <br>
                <p class="text-center">Don't have an account? <a href="register.php">Sign Up</a></p>

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
