<?php
    $con = mysqli_connect("localhost", "root", "");
    $DB = "taleshive";
    $result = mysqli_select_db($con, $DB);

    if($con){
        echo "Connected to the WEB SERVER". "<br>";    
    }
    else{
        echo "NOT Connected to the WEB SERVER". "<br>";
    }

    if($result){
        echo "Connected to the DATABASE". "<br>";
    }
    else{
        echo "NOT Connected to the DATABASE". "<br>";
    }
?>