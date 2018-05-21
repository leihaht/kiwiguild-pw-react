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

class ForumAPITags extends ForumAPI {

    // inputSegment2 is tag id(tag_id)
    //$this->processTags($this->inputSegment2);
    /**
     * proceed input requests
     * get tags Pages by tag_id
     * @param string $tag_name
     */
    public function processRequest ($tag_name) {
        $list;
        $tag;
        $tag_limit = 12;
        // get all forums info
        $list = wire('pages')->find("parent=/tags/");
        if ($tag_name != '') {
            $tag = wire('pages')->get("name=$tag_name");
            if ($tag->parent()->name == 'tags') $list->import($tag->children());
            else $list->import($tag->parent()->children());
        }
        $list->sort('sort');
        return $this->build($list);
    }

    /**
     * push tags array $response and return it
     * @param PageArray|array $tags
     */
    private function build($tags) {
        $response = [];
        if ($tags->count) {
            foreach($tags as $t) {
                array_push($response, array(
                    '_id' => $t->id,
                    'tag_slug' => $t->name,
                    'tag_name' => $t->title,
                    'tag_color' => $t->color,
                    'description' => $t->summary,
                    'isChild' => ($t->rootParent !== $t->parent)
                    //'position' => $t->sort
                ));
            }
        }
        return $response;
    }
}
