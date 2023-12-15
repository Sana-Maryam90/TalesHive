<?php
require 'dbconnection.php';

if(isset($_POST['login'])){
    $email = $_POST['email'];
    $password = $_POST['password'];

    $q = "SELECT * FROM user WHERE email='$email' and password='$password'";
    $result = mysqli_query($con, $q);
    $rows = mysqli_fetch_assoc($result);

    $userId = $rows['userid'];
    $user = $rows['username'];

    if (mysqli_num_rows($result) == 0) {
        header("Location: login.html?registered=loginfalse");
    } 
    else {
        header("Location: login.html?registered=logintrue&userid=$userId&username=$user");
    }   
}




// $postdata = file_get_contents("php://input");
// $request = json_decode($postdata);
// // echo $request->Email;
// $user = $request->Email;
// $password = $request->Password;
// $db = "eyetistic";
// mysqli_select_db($con, $db);
// $q = "select * from info where Email='$user' and Password='$password'";
// $result = mysqli_query($con, $q);

// if (mysqli_num_rows($result) == 0) {
//     echo "Not verified";
// } else {
//     echo "verified";
// }
?>