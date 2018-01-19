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
        case 'tags':
            $tag_id = $input->urlSegment(2);
            if ( $tag_id > 0) {
                $discussions = $pages->find("tags=$tag_id");

                if ($discussions->count) {
                    foreach ($discussions as $disc) {
                        $posts = $pages->find("parent=/posts/, post_to_discussion=$disc");
                        $start_post = $posts->get('sort=date');
                        $last_post = $posts->get('sort=-date');
                        array_push($response, array(
                            '_id' => $disc->id,
                            'discussion_slug' => $disc->name,
                            'date' => $disc->created,
                            'title' => $disc->title,
                            'tags' => $disc->tags->explode(function($t) {
                                return array(
                                    '_id' => $t->id,
                                    'tag_slug' => $t->name,
                                    'tag_name' => $t->title,
                                    'tag_color' => $t->color
                                );
                            }),
                            'content' => $start_post->body,
                            'replies_count' => $posts->count() - 1,
                            'start_post' => array(
                                '_id' => $start_post->id,
                                'date' => $start_post->created,
                                'user' => array(
                                    '_id' => $start_post->createdUser->id,
                                    'name' => $start_post->createdUser->name,
                                    'email' => $start_post->createdUser->email,
                                    'role' => 'user'
                                )
                            ),
                            'last_post' => array(
                                '_id' => $last_post->id,
                                'date' => $last_post->created,
                                'user' => array(
                                    '_id' => $last_post->createdUser->id,
                                    'name' => $last_post->createdUser->name,
                                    'email' => $last_post->createdUser->email,
                                    'role' => 'user'
                                )
                            )
                        ));
                    }
                }
            } else {
                // get all forums info
                $tags = $pages->find("parent=/tags/");

                if ($tags->count) {
                    foreach($tags as $t) {
                        array_push($response, array(
                            '_id' => $t->id,
                            'tag_slug' => $t->name,
                            'tag_name' => $t->title,
                            'tag_color' => $t->color
                        ));
                    }
                }
            }
            break;

        case 'discussions':
            $d_name = $input->urlSegment(2);
            if ($d_name) {
                $discussion = $pages->get("parent=/discussions/, name=$d_name");
                $posts = $pages->find("parent=/posts/, post_to_discussion=$discussion");
                $response = array(
                    '_id' => $discussion->id,
                    'slug' => $discussion->name,
                    'name' => $discussion->title,
                    'posts' => $posts->explode(function($p){
                        return array(
                            '_id' => $p->id,
                            'name' => $p->name,
                            'body' => $p->body,
                            'user' => array(
                                '_id' => $p->created_users_id,
                                'name' => $p->createdUser->name
                            )
                        );
                    })
                );
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
