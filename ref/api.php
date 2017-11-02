<?php
namespace ProcessWire;
header("Access-Control-Allow-Origin: *");



require_once "./inc/Rest.php";

if ($input->urlSegmentStr) {

    // set vars with the default output
    $statuscode = 200;
    $response = [];
    $header = \Rest\Header::mimeType('json');

    switch ($input->urlSegmentStr) {
        case 'test':
            $response = array(
                array(
                    '_id' => 1,
                    'forum_slug' => 'general',
                    'forum_name' => 'General'
                ),
                array(
                    '_id' => 2,
                    'forum_slug' => 'react',
                    'forum_name' => 'React'
                )
            );

            // render the response and body
            http_response_code($statuscode);
            header($header);
            echo json_encode($response);
            break;
    }

}
