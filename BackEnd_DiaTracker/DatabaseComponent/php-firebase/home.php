<?php

include('authentication.php');
include('includes/header.php');
?>


<h1>Home Page</h1>
<a href="logout.php" class="btn btn-danger">Logout</a>
<?php
                if(isset($_SESSION['status']))
                {
                    echo "<h4 class='alert alert-success'>".$_SESSION['status']."</h4>";
                    unset($_SESSION['status']);
                }
?>


<?php
 include('includes/footer.php');
?>    