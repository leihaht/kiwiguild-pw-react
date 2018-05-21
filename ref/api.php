<?php
namespace ProcessWire;
header("Access-Control-Allow-Origin: *");

require_once "./inc/ForumAPIctrl.class.php";
$processAPI = new ForumAPIctrl;
$processAPI->renderResponse();
