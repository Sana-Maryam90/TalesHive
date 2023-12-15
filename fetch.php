<?php
    $con = mysqli_connect("localhost", "root", "");
    $DB = "taleshive";
    $result = mysqli_select_db($con, $DB);

    // if($con){
    //     echo "Connected to the WEB SERVER". "<br>";    
    // }
    // else{
    //     echo "NOT Connected to the WEB SERVER". "<br>";
    // }

    // if($result){
    //     echo "Connected to the DATABASE". "<br>";
    // }
    // else{
    //     echo "NOT Connected to the DATABASE". "<br>";
    // }

$q = "SELECT * FROM story";
$result = mysqli_query($con, $q);
// if($result){
//     echo "Content Added";
// }
// else{
//     echo "Something went wrong";
// }

$stories = array();

// Fetch each story row and add it to the array
while ($row = mysqli_fetch_assoc($result)) {
    $stories[] = $row;
}

// Return the stories as JSON data
header('Content-Type: application/json');
echo json_encode($stories);
?>
