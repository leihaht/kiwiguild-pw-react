<?php
namespace ProcessWire;
header("Access-Control-Allow-Origin: *");



require_once "./inc/Rest.php";

// set vars with the default output
$statuscode = 200;
$response = [];
$header = \Rest\Header::mimeType('json');

if(\Rest\Request::is('get')) {
    switch ($input->urlSegmentStr) {
        // get all forums info
        default:
            $forums = $pages->find("parent=/forums/");

            if ($forums->count) {
                foreach($forums as $f) {
                    array_push($response, array(
                        '_id' => $f->id,
                        'forum_slug' => $f->name,
                        'forum_name' => $f->title
                    ));
                }
            } else {
                //page does not exist
                $response["error"] = "The page does not exist";
                $statuscode = 404; // Not Found (see /site/templates/inc/Rest.php)
            }
            break;

    }
}

// render the response and body
http_response_code($statuscode);
header($header);
echo json_encode($response);
