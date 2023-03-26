<?php
session_start();
include('includes/header.php');
?>
        <div class="loader"></div>
        <div class="mainbox">
        <img src="diatracker-logo-transparent.png" alt="diatracker-logo" width="600" class="logo">
        </div>
<div class="container">
    <div class="row justify-content-center">
        <div class ="col-md-5 mt-5">
        
        <?php
                if(isset($_SESSION['status']))
                {
                    echo "<h4>".$_SESSION['status']."</h4>";
                    unset($_SESSION['status']);
                }
                ?>
    
        <div class="box">
            <div class="card-header">
                <h1>Register here!</h1>
 
        </div>
        <div class="card-body">
            <form action="code.php" method="POST">
                
            
                <div class="myform2">
                <p>Username</p>
                    <input type="text" name="username" class="form-control" placeholder="Enter Username" required="">
                </div>
                <br>
                <div class="form-group-mb-3">
                <p>Email</p>  
                    <input type="email" name="email" class="form-control" placeholder="Enter Email Address" required="">
                </div>
                <br>
                <div class="form-group-mb-3">
                <p>Password</p>
                    <input type="password" name="password1" class="form-control" placeholder="Enter Password" required pattern="^(?=.*\d)(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).*$" title="Password must have at least one digit, one uppercase letter, one non-alphanumeric character, and be at least 8 characters long">
                </div>
                <br>
                <div class="form-group-mb-3">
                <p>Retype Password</p>
                    <input type="password" name="password2" class="form-control" placeholder="Confirm Password" required ="">
                </div>
                <?php 
                if(isset($_SESSION['pwd_error'])) { ?>
                <div class="alert alert-danger">
                    <?php echo $_SESSION['pwd_error']; unset($_SESSION['pwd_error']); ?>
                </div>
                <?php } ?>
                <br>
                <div class="myform2 ">
                    <input type="submit" name="register_now_btn" class="btn btn-primary"value="Register" ></input>
                </div>
                
                <br>
                <p class="text-center">Already have an account? <a href="login.php">Sign in</a></p>

            </form>
            <script src="loading.js"></script>
        </div>    
    </div>
    </div>
</div>

<?php
include("includes/footer.php");
?>

