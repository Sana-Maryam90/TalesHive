<?php
require('dbconnection.php');

if($_SERVER['REQUEST_METHOD'] == "POST"){
    $username = $_POST['username'];
    $email = $_POST['email'];
    $password = $_POST['password'];

    $query = "SELECT * FROM user WHERE email = '$email'";
    $result = mysqli_query($con, $query);
    if ($result->num_rows > 0) {
        header("Location: login.html?registered=false");
        exit();
    }

    $q = "INSERT INTO user(username, email, password) VALUES('$username', '$email', '$password')";
    $result = mysqli_query($con, $q);
    if($result){
        header("Location: login.html?registered=true");
    }
    else{
        echo "Something went wrong";
    }

    mysqli_close($con);
    exit();
}

?>