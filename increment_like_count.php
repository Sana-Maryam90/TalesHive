<?php
include("connection.php");

$like_id = $_POST['story_id'];
echo "Story ID: " . $like_id . "<br>";
$incrementBy= 1;

$sql = "UPDATE story SET likeCount = likeCount + $incrementBy WHERE s_id = $like_id";
$result = mysqli_query($con, $sql);
if($result){
    echo "Query Successful<br>";
}
else{
    echo "Unsuccessful<br>";
}
?>