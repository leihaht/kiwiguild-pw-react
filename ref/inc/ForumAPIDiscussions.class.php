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

class ForumAPIDiscussions extends ForumAPI {

    /**
     * proceed input requests
     * get the discussions of forum by tag id
     * @param string $d_name
     */
    public function processRequest ($d_name) {
        if ($d_name) {
            // get single discussion
            return $this->buildPosts($d_name);
        } else {
            // inputGetTag is tag_id
            // get discussions filter by tag
            return $this->buildDiscussions((int)$this->tag);
        }
    }

    /**
     * push single discussion array into $this->response
     * @param string $d_name
     */
    private function buildPosts($d_name) {
        $discussion = wire('pages')->get("parent=/discussions/, name=$d_name");
        $posts = wire('pages')->find("parent=/posts/, post_to_discussion=$discussion");
        return array(
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

    /**
     * push discussions list array into $this->response
     *
     * @param integer $tag_id
     */
    private function buildDiscussions($tag_id = 0) {
        $discussions;
        $response = [];
        if ($tag_id > 0) {
            $discussions = wire('pages')->find("parent=/discussions/, tags=$tag_id");
        } else {
            // get all forums info
            $discussions = wire('pages')->find("parent=/discussions/");
        }
        // sort
        $discussions = $this->sortDiscussion($discussions);

        if ($discussions->count) {
            foreach ($discussions as $disc) {
                $start_post = $disc->start_post;
                $last_post = $disc->last_post;
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
                    'replies_count' => $disc->count,
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
        return $response;
    }

    /**
     * sort discussion by sort method
     *
     * sort methods
     * Latest: default sort. pinned first and then newest comment
     * Top: sort by comments number
     * Newest: sort by newst discussion and display when it is started
     * Oldest: sort by oldest discussion and display when it is started
     *
     * @param PageArray|array $discussions
     * @return PageArray|array $discussions
     */
    private function sortDiscussion ($discussions) {
        switch ($this->sort) {
            case 'top':
                $discussions->sort('-comments_count');
                break;
            case 'newest':
                $discussions->sort('-start_post.created');
                break;
            case 'oldest':
                $discussions->sort('start_post.created');
                break;
            default:
                break;
        }
        return $discussions;
    }
}
