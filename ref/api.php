<?php
namespace ProcessWire;
header("Access-Control-Allow-Origin: *");



require_once "./inc/Rest.php";

// set vars with the default output
$statuscode = 200;
$response = [];
$header = \Rest\Header::mimeType('json');

if(\Rest\Request::is('get')) {
    switch ($input->urlSegment(1)) {
        case 'forums':
            $forum_id = $input->urlSegment(2);
            if ( $forum_id > 0) {
                $discussions = $pages->find("forum_ref=$forum_id");

                if ($discussions->count) {
                    foreach ($discussions as $disc) {
                        array_push($response, array(
                            '_id' => $disc->id,
                            'forum_id' => $disc->forum_ref->id,
                            'forum' => array(
                                '_id' => $disc->forum_ref->id,
                                'forum_slug' => $disc->forum_ref->name,
                                'forum_name' => $disc->forum_ref->title
                            ),
                            'user_id' => $disc->createdUser->id,
                            'user' => array(
                                'name' => $disc->createdUser->name,
                                'email' => $disc->createdUser->email,
                                'role' => 'user'
                            ),
                            'discussion_slug' => $disc->name,
                            'date' => $disc->created,
                            'title' => $disc->title,
                            'content' => $disc->body
                        ));
                    }
                }
            } else {
                // get all forums info
                $forums = $pages->find("parent=/forums/");

                if ($forums->count) {
                    foreach($forums as $f) {
                        array_push($response, array(
                            '_id' => $f->id,
                            'forum_slug' => $f->name,
                            'forum_name' => $f->title
                        ));
                    }
                }
            }
            break;

        default:
            //page does not exist
            $response["error"] = "The page does not exist";
            $statuscode = 404; // Not Found (see /site/templates/inc/Rest.php)
            break;

    }
}

// render the response and body
http_response_code($statuscode);
header($header);
echo json_encode($response);
