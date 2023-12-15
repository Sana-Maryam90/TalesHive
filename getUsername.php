<?php
include("connection.php");

$clickedValue = $_POST['clickedValue'];

$query = "SELECT *
          FROM story
          WHERE s_id = " . $clickedValue;


$result = mysqli_query($con, $query);

// Create an associative array to store the story and its associated writers
$storyData = array();

while ($row = mysqli_fetch_assoc($result)) {
    // Store the story information
    $storyData['story'] = array(
        's_id' => $row['s_id'],
        'title' => $row['title'],
        'content' => $row['content'],
        'date' => $row['date']
        // Add other story properties as needed
    );

    // Store the writer information
    if (!empty($row['w_name'])) {
        $storyData['writer'][] = array(
            'w_name' => $row['w_name']
            // Add other writer properties as needed
        );
    }
}

// Return the story data as JSON
header('Content-Type: application/json');
echo json_encode($storyData);

?>
