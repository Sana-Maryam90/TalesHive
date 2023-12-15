<?php
include("connection.php");

// $query = "SELECT * FROM story";
$query = "SELECT story.*, COUNT(comment.comment_id) AS commentCount 
          FROM story 
          LEFT JOIN comment ON story.s_id = comment.s_id 
          GROUP BY story.s_id";
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