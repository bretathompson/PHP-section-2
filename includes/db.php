<?php ob_start();

// $db['db_host'] = "localhost";
// $db['db_user'] = "root";
// $db['db_pass'] = "root";
// $db['db_name'] = "cms";

// foreach($db as $key => $value){
// define(strtoupper($key), $value);
// }

if(isset($_POST['submit'])){

$username = $_POST['username'];
$password = $_POST['password'];

// $connection = mysqli_connect(DB_HOST, DB_USER,DB_PASS,DB_NAME);

$connection = mysqli_connect('localhost', 'root', 'root', 'cms');



$query = "SET NAMES utf8";
mysqli_query($connection,$query);
}

//if($connection) {
//
//echo "We are connected";
//
//}


?>