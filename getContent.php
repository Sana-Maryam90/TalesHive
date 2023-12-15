<!-- <?php//
// require 'dbconnection.php';


// $title = $_POST['title'];
// $content = $_POST['content'];
// $dt = date('y-m-d');

// $q = "INSERT INTO story(title, content, date) VALUES('$title', '$content', '$dt')";
// $result = mysqli_query($con, $q);
// if($result){
//     echo "Content Added";
// }
// else{
//     echo "Something went wrong";
// }

// mysqli_close($con);
// exit();

// // Return a response
// $response = 'Data received and processed successfully.';
// echo $response;


// $stmt = $mysqli->prepare("INSERT INTO story(title, content, date) VALUES (?, ?, ?)");

// // Bind the parameters
// $stmt->bind_param("sss", $title, $content, $dt);



// Execute the statement
// $stmt->execute();

// Close the statement and the database connection
// $stmt->close();
// $mysqli->close();
// ?> 

//
// require 'dbconnection.php';

// $title = $_POST['title'];
// $content = $_POST['content'];
// $dt = date('Y-m-d');

// $stmt = $con->prepare("INSERT INTO story (title, content, date) VALUES (?, ?, ?)");

// // Bind the parameters
// $stmt->bind_param("sss", $title, $content, $dt);

// // Execute the statement
// $stmt->execute();

// if ($stmt->affected_rows > 0) {
//     echo "Content Added";
// } else {
//     echo "Something went wrong";
// }

// $stmt->close();
// $con->close();
// ?>


<?php
require 'dbconnection.php';

$title = $_POST['title'];
$content = $_POST['content'];
$id = (int)$_POST['userId'];
$dt = date('Y-m-d');

// Prepare and execute the statement to insert the story into the story table
$stmt = $con->prepare("INSERT INTO story (title, content, date, userid) VALUES (?, ?, ?, ?)");
$stmt->bind_param("sssi", $title, $content, $dt, $id);
$stmt->execute();

if ($stmt->affected_rows > 0) {
    $s_id = $stmt->insert_id; // Get the auto-incremented s_id of the inserted story

    // Retrieve the selected genres from the form
    $genres = $_POST['genres'];
    // $genres = $_POST['genres'];
    $genresArray = explode(',', $genres);
    echo $genres;

    // Prepare and execute the statement to insert the genres into the genre table
    $genreStmt = $con->prepare("INSERT INTO genre (category, s_id) VALUES (?, ?)");
    $genreStmt->bind_param("si", $category, $s_id);

    // Loop through the selected genres and insert them into the genre table
    foreach ($genresArray as $category) {
        $genreStmt->execute();
    }

    // Check if any genres were inserted
    if ($genreStmt->affected_rows > 0) {
        echo "Content Added in genre";
    } else {
        echo "Something went wrong";
    }

    $genreStmt->close();
} else {
    echo "Something went wrong";
}

$stmt->close();
$con->close();
?>
