<?php

// start the session
session_start();

// include the header file, which contains the HTML header and navigation
include('includes/header.php');

        echo '<div class="loader"></div>';
        echo '<div class="mainbox">';
        echo '<img src="diatracker-logo-transparent.png" alt="diatracker-logo" width="600" class="logo">';
        echo "</div>";
        echo '<div class="container">';
        echo '<div class="row justify-content-center">';
        echo '<div class ="col-md-5 mt-5">';
        
                // display any password error messages
                if(isset($_SESSION['status']))
                {
                    echo "<h4>".$_SESSION['status']."</h4>";
                    unset($_SESSION['status']);
                }

    
        echo '<div class="box">';
            echo '<div class="card-header">';
                echo '<h1>Register here!</h1>';
 
        echo "</div>";
        echo '<div class="card-body">';
            echo '<form action="code.php" method="POST">';
                
            
                echo '<div class="myform2">';
                echo "<p>Username</p>";
                echo '<input type="text" name="username" class="form-control" placeholder="Enter Username" required="">';
                echo"</div>";
                echo "<br>";
                echo '<div class="form-group-mb-3">';
                echo "<p>Email</p>";  
                echo '<input type="email" name="email" class="form-control" placeholder="Enter Email Address" required="">';
                echo "</div>";
                echo "<br>";
                echo '<div class="form-group-mb-3">';
                echo '<p>Password</p>';
                echo '<input type="password" name="password1" class="form-control" placeholder="Enter Password" required pattern="^(?=.*\d)(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).*$" title="Password must have at least one digit, one uppercase letter, one non-alphanumeric character, and be at least 8 characters long">';
                echo "</div>";
                echo "<br>";
                echo '<div class="form-group-mb-3">';
                echo "<p>Retype Password</p>";
                echo '<input type="password" name="password2" class="form-control" placeholder="Confirm Password" required ="">';
                echo "</div>";

                if(isset($_SESSION['pwd_error'])) {
                echo '<div class="alert alert-danger">';
                    echo $_SESSION['pwd_error']; unset($_SESSION['pwd_error']);
                echo '</div>';
                }
                echo "<br>";
                 // Add reCAPTCHA widget
                 echo '<div class="g-recaptcha" data-sitekey="6Le40FklAAAAABRczZ6GGVMI-0Mxot82OtlM3YJy"> </div>';                        
                 echo "<br>";
                 echo '<div class="myform2 ">';
                 echo '<input type="submit" name="register_now_btn" class="btn btn-primary"value="Register" ></input>';
                echo "</div>";
                
                echo "<br>";
                echo '<p class="text-center">Already have an account? <a href="login.php">Sign in</a></p>';

            echo "</form>";
                
            echo '<script src="loading.js"></script>';
            echo '<script src="https://www.google.com/recaptcha/api.js" async defer></script>';
        echo "</div>";    
    echo "</div>";
    echo "</div>";
echo "</div>";

// include the footer file, which contains the closing HTML tags
include("includes/footer.php");
?>

