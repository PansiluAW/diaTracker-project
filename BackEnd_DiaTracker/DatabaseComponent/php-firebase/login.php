<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Origin, X-Api-Key, X-Requested-With, Content-Type, Accept, Authorization");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE. OPTIONS");
header("Access-Control-Allow-Credentials: true");
session_start(); 


// Check if the user is already logged in
if(isset($_SESSION['verified_user_id'])) {
    $_SESSION['status'] = "You are logged in";

     // set a cookie to remember the user
    //  setcookie('remember_me', $user['id'], time() + (86400 * 30), "/"); // set for 30 days
    header("Location: http://localhost:3000/");
    exit();
}

include('includes/header.php');
// if(!isset($_COOKIE['verified_user_id'])) {
    // CODE GOES HERE
// }else {
//     header("Location: home.php");
// }
// if(isset($_COOKIE['remember_user'])){

// }

echo "<div class=loader></div>";
    // <!-- This div is for the login form -->
    echo "<div class=mainbox>";
        echo "<img src=diatracker-logo-transparent.png alt=diatracker-logo width=600 class=logo>";
        echo "</div>";
echo "<div class=container>";
        echo "<div class=row justify-content-center>";
            echo "<div class='col-md-5 mt-5'>";

            
                if(isset($_SESSION['status']))
                {
                    echo "<h4 class='alert alert-success'>".$_SESSION['status']."</h4>";
                    unset($_SESSION['status']);
                }
                

                echo "<div class=box>";
                    echo "<div class=card-header>";
                        echo "<h1>Login Here!</h1>";
                echo "</div>";
                echo "<div class=card-body>";
                    echo "<form id=login-form action=logincode.php method=POST>";
                        echo "<div class=form-group-mb-3>";
                        echo "<p>Email</p>";
                            echo "<input type=email name=email class=form-control placeholder='Enter Email Address' required=''>";
                        echo "</div>";
                        echo "<br>";
                        echo "<div class=form-group-mb-3>";
                        echo "<p>Password</p>";
                            echo "<input type=password name = password class=form-control placeholder='Enter Password' required=''>";
                        echo "</div>";
                        echo "<br>";
                        // Add reCAPTCHA widget
                        echo '<div class="g-recaptcha" data-sitekey="6Le40FklAAAAABRczZ6GGVMI-0Mxot82OtlM3YJy"> </div>';                        
                        echo "<br>";
                        echo "<div class='form-group-mb-3 text-center'>";
                        echo "<input type='submit' name='login_now_btn' id=submit-btn class='btn btn-primary' value=Login></input>";
                        echo "</div>";
                        echo "<br>";
                        echo "<script src=loading.js></script>";
                echo "<p class=text-center>Don't have an account? <a href=register.php>Sign Up</a></p>";
                echo "</div>";
    

                // check if password is incorrect and display error message
                if(isset($_SESSION['status']) && $_SESSION['status'] == 'Password is incorrect') {
                    echo "<h4 class='alert alert-danger'>Password is incorrect</h4>";
                    unset($_SESSION['status']);
                }

            echo "</form>";
        echo "</div>";
        echo '<script src="https://www.google.com/recaptcha/api.js" async defer></script>';
    echo "</div>";
    echo "</div>";
echo "</div>";
// const form = document.querySelector('#login-form');
// const submitBtn = document.querySelector('#submit-btn');

// submitBtn.addEventListener('click', (event) =>{
//     event.preventDefault();

//     grecaptcha.ready(() => {
//         grecaptcha.execute('6LeAIFglAAAAAIDTV8PGC9MqAJT_Cd8dG7f4lOGP', {action: 'submit'}).then((token) => {
//             const formData = new FormData(form);
//             formData.append('token', token);

//             fetch('logincode.php', {
//                 method: 'POST',
//                 body: formData
//             }).then((response.status == 200) => {
//                 window.location.href = "logincode.php";
//             })
//         })
//     })
// })
include("includes/footer.php");
?>

