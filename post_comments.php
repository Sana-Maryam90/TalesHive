<?php
include("connection.php");

$sid = (int)$_POST['s_id'];
$name = $_POST['u_name'];
$txt = $_POST['text'];
$dt =  date('Y-m-d');

$q2 = "INSERT INTO comment(username, c_text, s_id, `date`) VALUES('$name', '$txt' ,$sid, '$dt')";
$q2_result = mysqli_query($con, $q2);
// if($q2_result){
//     echo "Record Inserted<br>";
// }
// else{
//     echo "Insertion Failed<br>";
// }


?>