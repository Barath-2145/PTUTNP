<?php
// Your PHP script logic here
$message = "Hello from PHP!";
$response = array('message' => $message);

// Set the response header to specify JSON content
header('Content-Type: application/json');

// Output the JSON response
echo json_encode($response);
?>
