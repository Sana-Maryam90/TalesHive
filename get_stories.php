<?php
include("connection.php");

$clickedValue = $_POST['clickedValue'];
        
$query = "SELECT story.*, user.username, GROUP_CONCAT(genre.category) AS categories
          FROM story
          LEFT JOIN user ON story.userid = user.userid
          LEFT JOIN genre ON story.s_id = genre.s_id
          WHERE story.s_id = " . $clickedValue . "
          GROUP BY story.s_id";


$result = mysqli_query($con, $query);

// Create an associative array to store the story and its associated writers
$storyData = array();

while ($row = mysqli_fetch_assoc($result)) {
    // Store the story information
    $storyData['story'] = array(
        's_id' => $row['s_id'],
        'title' => $row['title'],
        'content' => $row['content'],
        'date' => $row['date'],
        'username' => $row['username'],
        'categories' => $row['categories']
        // Add other story properties as needed
    );
}

// Return the story data as JSON
header('Content-Type: application/json');
echo json_encode($storyData);

?>
