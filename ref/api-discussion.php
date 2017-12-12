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
        case 'forums':
            $forums = $pages->find("parent=/forums/");

            foreach($forums as $f) {
                array_push($response, array(
                    '_id' => $f->id,
                    'forum_slug' => $f->name,
                    'forum_name' => $f->title
                ));
            }

            // render the response and body
            http_response_code($statuscode);
            header($header);
            echo json_encode($response);
            break;
        case 'pinned':
            $response = array(
                array(
                    '_id' => 1,
                    'forum_id' => 41,
                    'forum' => array(
                        '_id' => 99,
                        'forum_slug' => 'general',
                        'forum_name' => 'General'
                    ),
                    'user_id' => 76,
                    'user' => array(
                        '_id' => 1095135,
                        'name' => 'John Doe',
                        'username' => 'djohn',
                        'avatarUrl' => 'https://avatars3.githubusercontent.com/u/10725804?v=4',
                        'email' => 'test@test.com',
                        'role' => 'admin',
                        '__v' => 0
                    ),
                    'discussion_slug' => 'hi__welcome_to_reforum_591dd6ca88f0cd0004bb4973',
                    'date' => '2017-05-18T17:15:54.526Z',
                    'title' => 'Hi, Welcome to ReForum',
                    'content' => '{
                        \"entityMap\":{},
                        \"blocks\":[{
                            \"key\":\"6dk6h\",
                            \"text\":\"Thank you for checking out the app. If you like it, please appreciate on GitHub. :-)\",
                            \"type\":\"unstyled\",
                            \"depth\":0,
                            \"inlineStyleRanges\":[{
                                \"offset\":81,
                                \"length\":3,
                                \"style\":\"BOLD\"
                            }],
                        \"entityRanges\":[],
                        \"data\":{}
                        }]
                    }',
                    'pinned' => true,
                    'tags' => array('reforum'),
                    'favorites' => array(
                        '15531351',
                        '1535135135',
                        '13524352452456',
                        '2345625625'
                    ),
                    '__v' => 31,
                    'opinion_count' => 20
                )
            );

            // render the response and body
            http_response_code($statuscode);
            header($header);
            echo json_encode($response);
            break;
    }

}
