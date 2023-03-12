<?php
session_start();
include('includes/header.php');
?>

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
        
        
        
        
        <div class="card">
            <div class="card-header">
                <h5>Register with us!</h5>
                <p>Your information is safe with us</p>
        </div>
        <div class="card-body">
            <form action="code.php" method="POST">
                
            
                <div class="form-group-mb-3">
                    
                    <input type="text" name="username" class="form-control" placeholder="Enter Username" required="">
                </div>
                <br>
                <div class="form-group-mb-3">
                    
                    <input type="email" name="email" class="form-control" placeholder="Enter Email Address" required="">
                </div>
                <br>
                <div class="form-group-mb-3">
                    
                    <input type="password" name="password1" class="form-control" placeholder="Enter Password" required="">
                </div>
                <br>
                <div class="form-group-mb-3">
                    
                    <input type="password" name="password2" class="form-control" placeholder="Confirm Password" required="">
                </div>
                <?php 
                if(isset($_SESSION['pwd_error'])) { ?>
                <div class="alert alert-danger">
                    <?php echo $_SESSION['pwd_error']; unset($_SESSION['pwd_error']); ?>
                </div>
                <?php } ?>
                <br>
                <div class="form-group-mb-3 text-center">
                    <button type="submit" name="register_now_btn" class="btn btn-primary" >Sign Up</button>
                </div>
                <br>
                <p class="text-center">Already have an account? <a href="login.php">Sign in</a></p>

            </form>
        </div>    
    </div>
    </div>
</div>

<?php
include("includes/footer.php");
?>
