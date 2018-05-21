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

require_once "Rest.php";

class ForumAPIctrl {

    /**
     * get all the input and save into variables
     */
    private $inputSegment2 = '';
    private $header = '';
    private $response = [];

    public function __construct () {
        $this->inputSegment2 = wire('input')->urlSegment(2);
        $this->processInput();
    }
    private function processInput() {
        if(\Rest\Request::is('get')) {
            switch(wire('input')->urlSegment(1)) {
                case 'tags':
                    require_once "./inc/ForumAPITags.class.php";
                    $processingAPI = new ForumAPITags;
                    break;
                case 'discussions':
                    require_once "./inc/ForumAPIDiscussions.class.php";
                    $processingAPI = new ForumAPIDiscussions;
                    break;
                case 'users':
                    require_once "./inc/ForumAPIUser.class.php";
                    $processingAPI = new ForumAPIUser;
                    break;
                default:
                    $this->setResponse(['error' => "The page does not exist"]);
                    break;
            }

            // set header
            $this->setHeader(\Rest\Header::mimeType('json'));
            header($this->header);
            // set statuscode
            if($this->getResponse('error')) {
                http_response_code(400);
            } else {
                $this->setResponse($processingAPI->processRequest($this->inputSegment2));
                http_response_code($processingAPI->getStatuscode());
            }
        }
    }
    public function renderResponse() {
        echo json_encode($this->getResponse());
    }

    public function setHeader($header) {
        $this->header = $header;
    }
    public function getResponse($para = '') {
        if($para != '')
            return $this->response[$para];
        else
            return $this->response;
    }
    public function setResponse($response) {
        $this->response = $response;
    }
}
