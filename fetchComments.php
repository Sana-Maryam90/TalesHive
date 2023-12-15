<?php
include("connection.php");

$val = $_GET['value'];

$query = "SELECT * FROM comment WHERE s_id = '$val'";
$result = mysqli_query($con, $query);

// Create an array to store the stories
$comments = array();

// Fetch each story row and add it to the array
while ($row = mysqli_fetch_assoc($result)) {
    $comments[] = $row;
}

// Return the stories as JSON data
header('Content-Type: application/json');
echo json_encode($comments);
?>