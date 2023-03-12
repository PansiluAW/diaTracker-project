<?php
session_start();
 include('includes/header.php');
?>

  <div class="container">
    <div class="row">
        <div class="col-md-12">
            <div class="card mt-4">
                <div class="card-header">
                    <h4>firebase and php Insert data to the firebase
                        <a href="index.php" class="btn btn-danger float-end">BACK</a>

                    </h4>
                </div>
            <div class="card-body">
                <?php
                if(isset($_SESSION['status']))
                {
                    echo "<h4>".$_SESSION['status']."</h4>";
                    unset($_SESSION['status']);
                }
                ?>

            <div class ="row justify-content-center">
                <div class="col-md-6">
                    <form action="code.php" method="POST">
                        <div class="form-group mb-3">
                            <label for="">User Name</label>
                            <input type="text" name="username" class="form-control">
                        </div> 
                        <div class="form-group mb-3">
                            <label for="">Email Id</label>
                            <input type="text" name="email" class="form-control">
                        </div>
                        <div class="form-group mb-3">
                            <button type="submit" name="save_data" class="btn btn-primary">Save</button>
                    </form>
                </div> 
            </div>  
        </div>
    </div>
   </div>
        
<?php
 include('includes/footer.php');
?>                  
