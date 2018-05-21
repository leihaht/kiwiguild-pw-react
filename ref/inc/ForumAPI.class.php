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

abstract class ForumAPI {

    private $statuscode = 200;

    protected $tag = '';
    protected $sort = '';

    /**
     * get all the input and save into variables
     */
    public function __construct () {
        $this->tag = wire('input')->get->tag;
        $this->sort = wire('input')->get->sort;
    }

    /**
     * proceed input requests
     */
    abstract public function processRequest($inputSegment2);

    public function getStatuscode() {
        return $this->statuscode;
    }
    public function setStatuscode($code) {
        $this->statuscode = $code;
    }
}
