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

<form id="add-sugar-level-form" method="POST" action="add-sugar-level.php">
  <label>Date:</label>
  <input type="date" name="date" required>
  <label>Time:</label>
  <input type="time" name="time" required>
  <label>Sugar Level:</label>
  <input type="number" name="value" required>
  <input type="hidden" name="username" >
  <button type="submit">Add Sugar Level</button>
</form>

<?php
 include('includes/footer.php');
?>