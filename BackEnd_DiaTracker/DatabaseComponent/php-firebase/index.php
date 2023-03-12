<?php
include('authentication.php');
include('includes/header.php');
?>

  <div class="container">
    <div class="row">

    <div class="col my-3">
        <div class="card my-3">
            <div class="card-body">
                <h5>Total Records : 
                <?php

                include("dbcon.php");
                $ref_table="contacts";
                $totalnum = $database->getReference($ref_table)->getSnapShot()->numChildren();
                echo $totalnum;
                ?>

                </h5>
        
            </div>   
        </div>
        <div class="col-md-12 my-3 text-end">
        <a href="logout.php" class="btn btn-danger">Logout</a>
            <a href="login.php" class="btn btn-success">Login</a>
            <a href="register.php" class="btn btn-primary">Register</a>
        </div>
        
        <div class="col-md-12">

                <?php
                if(isset($_SESSION['status']))
                {
                    echo "<h4>".$_SESSION['status']."</h4>";
                    unset($_SESSION['status']);
                }
                ?>
            <div class="card mt-4">
                <div class="card-header">
                    <h4>firebase and php Fetch
                        <a href="add-contact.php" class="btn btn-primary float-end">ADD</a>

                    </h4>
                </div>
            <div class="card-body">
                <table class="table table-bordered">
                    <thead>
                        <tr>
                            <th>S1.No</th>
                            <th>Username</th>
                            <th>Email</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>    
                    </thead>
                    <tbody>
                        <?php
                        include('dbcon.php');

                        $ref_table="contacts";
                        $fetchdata = $database->getReference($ref_table)->getValue();

                        if($fetchdata >0)
                        {
                            $i=0;
                            foreach($fetchdata as $key => $row)
                            {
                                $i++;
                                ?>
                                <tr>                            
                                    <td><?= $i?></td>
                                    <td><?= $row['username']; ?></td>
                                    <td><?= $row['email']; ?></td>
                                    <td>
                                        <a href ="edit.php?id=<?=$key;?>" class="btn btn-success">Edit</a>
                                    </td>
                                    <td>
                                        <form action="code.php" method="POST">
                                            <input type="hidden" name="id_key"value="<?=$key;?>">
                                            <button type="submit" name="delete_btn" class="btn btn-danger">Delete</button>
                                        </form>   
                                    </td>
                                </tr>    
                                <?php
                            }
                        }
                        else
                        {
                            ?>
                            <tr>
                                <td colspan="4">No Record Found</td>
                            </tr>    
                            <?php
                        }
                        ?>

                    </tbody>
                </table>
        </div>
    </div>
   </div>
        
<?php
 include('includes/footer.php');
?>                  
