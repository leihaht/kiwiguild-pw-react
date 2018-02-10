<?php
namespace ProcessWire;
header("Access-Control-Allow-Origin: *");

require_once "./inc/Rest.php";
require_once "./inc/ForumAPI.class.php";

// set vars with the default output
$statuscode = 200;
$response = [];
$header = \Rest\Header::mimeType('json');

if(\Rest\Request::is('get')) {
    $processingAPI = new ForumAPI;
    $response = $processingAPI->response;
    $statuscode = $processingAPI->statuscode;
}
// render the response and body
http_response_code($statuscode);
header($header);
echo json_encode($response);
