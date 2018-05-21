<?php namespace ProcessWire;

// home.php (homepage) template file.
// See README.txt for more information

require_once "./inc/ForumAPITags.class.php";
require_once "./inc/ForumAPIDiscussions.class.php";


$tags = new ForumAPITags;
$tags = json_encode($tags->processRequest());

/*
https://security.stackexchange.com/questions/175630/passing-php-code-directly-into-javascript-in-html5
$array = array(
    "a" => "'",
    "b" => '"',
);
// This will output {"a":"'","b":"\""}
echo json_encode($array);
// This will output {"a":"\u0027","b":"\u0022"}
echo json_encode($array, JSON_HEX_QUOT | JSON_HEX_APOS);
*/
$discussions = new ForumAPIDiscussions;
$discussions = json_encode($discussions->processRequest(), JSON_HEX_QUOT|JSON_HEX_TAG|JSON_HEX_AMP|JSON_HEX_APOS);

//$tokenName = $this->session->CSRF->getTokenName();
$tokenValue = $this->session->CSRF->getTokenValue();


$extra_script = <<<EOD
<script>
    window.__PRELOADED_STATE__ = {
        "app": {
            "rootclass": null,
            "currentForum": '',
            "tags": $tags,
            "discussions": $discussions
        },
        "session": {
            "user": {
                "_id": $user->id,
                "name": "$user->name",
                "email": "$user->email",
                "role":"user"
            },
            "csrfToken": "$tokenValue",
            "isLoggedin": "{$user->isLoggedin()}",
            "fetching": false,
            "error": false
        }
    };
</script>
EOD;
