<?php
session_start();
 include('includes/header.php');
?>

  <div class="container">
    <div class="row">
        <div class="col-md-12">
            <div class="card mt-4">
                <div class="card-header">
                    <h4>firebase and php Edit & Update data in firebase
                        <a href="index.php" class="btn btn-danger float-end">BACK</a>

                    </h4>
                </div>
            <div class="card-body">


            <div class ="row justify-content-center">
                <div class="col-md-6">
                    <?php
                        include("dbcon.php");
                        $ref_table ="contacts";
                        $id= $_GET['id'];
                        $editdata = $database->getReference($ref_table)->getChild($id)->getValue();
                    ?>
                    <form action="code.php" method="POST">
                        <input type="hidden" name="id" value="<?=$id;?>">
                        <div class="form-group mb-3">
                            <label for="">User Name</label>
                            <input type="text" name="username" value="<?=$editdata['username'];?>" class="form-control">
                        </div> 
                        <div class="form-group mb-3">
                            <label for="">Email Id</label>
                            <input type="text" name="email" value="<?=$editdata['email'];?>"class="form-control">
                        </div>
                        <div class="form-group mb-3">
                            <button type="submit" name="update_data" class="btn btn-primary">Update</button>
                    </form>
                </div> 
            </div>  
        </div>
    </div>
   </div>
        
<?php
 include('includes/footer.php');
?>                  
