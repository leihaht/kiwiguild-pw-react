<?php
/**
 * A simple class
 *
 * This is the long description for this class,
 * which can span as many lines as needed. It is
 * not required, whereas the short description is
 * necessary.
 *
 * It can also span multiple paragraphs if the
 * description merits that much verbiage.
 *
 * @author Hyo Tak Choi <hyotakdesign@gmail.com>
 * @copyright 2018 HyoDesign Studio
 * @license http://www.php.net/license/3_01.txt PHP License 3.01
 */
namespace ProcessWire;
require_once "ForumAPI.class.php";

class ForumAPIUser extends ForumAPI {

    // inputSegment2 is tag id(tag_id)
    //$this->processTags($this->inputSegment2);
    /**
     * proceed input requests
     * get tags Pages by tag_id
     * @param string $tag_name
     */
    public function processRequest ($user_id) {
        $user = '';

        // if current user is Geust, which means not logged in
        if ($user_id === 'current') {
            $user = wire('user');
            if($user->isGuest()) {
                return $this->buildGuest($user);
            }
        } else {
            $user = wire('users')->get((int)$user_id);
        }

        // check if an user is found
        if(!$user->id) {
            $this->setStatuscode(400);
            return array('error' => 'The user is not found.');
        }

        return $this->build($user);
    }

    /**
     * push tags array $response and return it
     * @param PageArray|array $tags
     */
    private function build($user) {
        return array(
            '_id' => $user->id,
            'username' => $user->name,
            //'tag_name' => $user->title,
            'email' => $user->email,
            'isLoggedin' => $user->isLoggedin(),
        );
    }
    /**
     * push tags array $response and return it
     * @param PageArray|array $tags
     */
    private function buildGuest($user) {
        return array(
            'isLoggedin' => false,
        );
    }
}

http://localhost/flarum-test/api/discussions?include=startUser%2ClastUser%2CstartPost%2Ctags&&
{
    "links":{
        "first":"http:\/\/localhost\/flarum-test\/api\/discussions?include=startUser%2ClastUser%2CstartPost%2Ctags"
    },
    "data":[{
        "type":"discussions",
        "id":"2",
        "attributes":{
            "title":"sort test",
            "slug":"sort-test",
            "commentsCount":2,
            "participantsCount":1,
            "startTime":"2018-01-12T00:26:02+00:00",
            "lastTime":"2018-01-17T18:45:29+00:00",
            "lastPostNumber":3,
            "canReply":false,
            "canRename":false,
            "canDelete":false,
            "canHide":false,
            "isApproved":true,
            "isLocked":false,
            "canLock":false,
            "isSticky":false,
            "canSticky":false,
            "canTag":false
        },
        "relationships":{
            "startUser":{
                "data":{
                    "type":"users",
                    "id":"1"
                }
            },
            "lastUser":{
                "data":{
                    "type":"users",
                    "id":"1"
                }
            },
            "startPost":{
                "data":{
                    "type":"posts",
                    "id":"2"
                }
            },
            "tags":{
                "data":[{
                    "type":"tags",
                    "id":"1"
                },{
                    "type":"tags",
                    "id":"3"
                },{
                    "type":"tags",
                    "id":"5"
                }]
            }
        }
    },{
        "type":"discussions",
        "id":"1",
        "attributes":{
            "title":"testing..",
            "slug":"testing",
            "commentsCount":1,
            "participantsCount":1,
            "startTime":"2017-12-11T23:49:43+00:00",
            "lastTime":"2017-12-11T23:49:43+00:00",
            "lastPostNumber":1,
            "canReply":false,
            "canRename":false,
            "canDelete":false,
            "canHide":false,
            "isApproved":true,
            "isLocked":false,
            "canLock":false,
            "isSticky":false,
            "canSticky":false,
            "canTag":false
        },
        "relationships":{
            "startUser":{
                "data":{
                    "type":"users",
                    "id":"1"
                }
            },
            "lastUser":{
                "data":{
                    "type":"users",
                    "id":"1"
                }
            },"startPost":{
                "data":{
                    "type":"posts",
                    "id":"1"
                }
            },"tags":{
                "data":[{
                    "type":"tags",
                    "id":"1"
                }]
            }
        }
    }],"included":[{
        "type":"users",
        "id":"1",
        "attributes":{
            "username":"admin",
            "avatarUrl":null
        }
    },{
        "type":"posts",
        "id":"2",
        "attributes":{
            "id":2,
            "number":1,
            "time":"2018-01-12T00:26:02+00:00",
            "contentType":"comment",
            "contentHtml":"\u003Cp\u003Etesting for the sort methods\u003Cbr\u003E\nand so on.\u003Cbr\u003E\nedited some text.\u003C\/p\u003E",
            "isApproved":true
        }
    },{
        "type":"posts",
        "id":"1",
        "attributes":{
            "id":1,
            "number":1,
            "time":"2017-12-11T23:49:43+00:00",
            "contentType":"comment",
            "contentHtml":"\u003Cp\u003Etest...\u003Cbr\u003E\nslkfoawrge\u003C\/p\u003E",
            "isApproved":true
        }
    },{
        "type":"tags",
        "id":"1",
        "attributes":{
            "name":"General",
            "description":null,
            "slug":"general",
            "color":"#888",
            "backgroundUrl":null,
            "backgroundMode":null,
            "iconUrl":null,
            "discussionsCount":3,
            "position":0,
            "defaultSort":null,
            "isChild":false,
            "isHidden":false,
            "lastTime":"2018-01-12T00:26:02+00:00",
            "canStartDiscussion":false,
            "canAddToDiscussion":false
        }
    },{
        "type":"tags",
        "id":"3",
        "attributes":{
            "name":"react",
            "description":"",
            "slug":"react",
            "color":"#136541",
            "backgroundUrl":null,
            "backgroundMode":null,
            "iconUrl":null,
            "discussionsCount":1,
            "position":null,
            "defaultSort":null,
            "isChild":false,
            "isHidden":false,
            "lastTime":"2018-01-12T00:26:02+00:00",
            "canStartDiscussion":false,
            "canAddToDiscussion":false
        }
    },{
        "type":"tags",
        "id":"5",
        "attributes":{
            "name":"TestTag",
            "description":"",
            "slug":"testtag",
            "color":"#f3d54e",
            "backgroundUrl":null,
            "backgroundMode":null,
            "iconUrl":null,
            "discussionsCount":1,
            "position":0,
            "defaultSort":null,
            "isChild":true,
            "isHidden":false,
            "lastTime":"2018-01-12T00:26:02+00:00",
            "canStartDiscussion":false,
            "canAddToDiscussion":false
        }
    }]
}



{
    "data":{
        "type":"users",
        "id":"1",
        "attributes":{
            "username":"admin",
            "avatarUrl":null,
            "bio":null,
            "joinTime":"2017-10-31T18:44:48+00:00",
            "discussionsCount":2,
            "commentsCount":3,
            "canEdit":true,
            "canDelete":true,
            "lastSeenTime":"2018-03-28T20:04:50+00:00",
            "isActivated":true,
            "email":"admin@test.com",
            "readTime":null,
            "unreadNotificationsCount":0,
            "newNotificationsCount":0,
            "preferences":{
                "notify_discussionRenamed_alert":true,
                "notify_postLiked_alert":true,
                "notify_discussionLocked_alert":true,
                "notify_postMentioned_alert":true,
                "notify_postMentioned_email":false,
                "notify_userMentioned_alert":true,
                "notify_userMentioned_email":false,
                "notify_newPost_alert":true,
                "notify_newPost_email":true,
                "followAfterReply":false,
                "discloseOnline":true,
                "indexProfile":true,
                "locale":null
            },
            "newFlagsCount":0,
            "canSuspend":false
        },
        "relationships":{
            "groups":{
                "data":[{
                    "type":"groups",
                    "id":"1"
                }]
            }
        }
    },
    "included":[{
        "type":"groups",
        "id":"1",
        "attributes":{
            "nameSingular":"Admin",
            "namePlural":"Admins",
            "color":"#B72A2A",
            "icon":"wrench"
        }
    }]
}
*/
