<?php
include("connection.php");

$share_id = $_POST['story_id'];
echo "Story ID: " . $share_id . "<br>";
$incrementBy= 1;

$sql = "UPDATE story SET shareCount = shareCount + $incrementBy WHERE s_id = $share_id";
$result = mysqli_query($con, $sql);
if($result){
    echo "Query Successful<br>";
}
else{
    echo "Unsuccessful<br>";
}
?>