<?php
include("connection.php");

$query = "SELECT s.*
FROM story s
JOIN genre g ON s.s_id = g.s_id
WHERE g.category = 'drama';";
$result = mysqli_query($con, $query);

// Create an array to store the stories
$stories = array();

// Fetch each story row and add it to the array
while ($row = mysqli_fetch_assoc($result)) {
    $stories[] = $row;
}

// Return the stories as JSON data
header('Content-Type: application/json');
echo json_encode($stories);
?>