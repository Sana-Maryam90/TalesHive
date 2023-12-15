<?php require 'dbconnection.php'; 
    $userid = $_GET['userid'];

    // $userid = $_POST["clickedValue"];
    echo $userid ;
    $q = "SELECT * FROM user WHERE userid='$userid'";
    $result = mysqli_query($con, $q);
    $rows = mysqli_fetch_assoc($result);

    $user = $rows['username'];
    $email = $rows['email'];

    echo $user;
    echo $email;
    header("Location: viewprofile.html?username=$user&email=$email");
?>


