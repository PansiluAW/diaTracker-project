<?php
require __DIR__.'/vendor/autoload.php';

use Kreait\Firebase\Factory;
use Kreait\Firebase\Auth;

$factory = (new Factory)
->withServiceAccount('fir-project-5a710-firebase-adminsdk-hwnsw-9199d08e80.json')
->withDatabaseUri('https://fir-project-5a710-default-rtdb.firebaseio.com/');

$database = $factory->createDatabase();
$auth = $factory->createAuth();

?>
