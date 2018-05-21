<?php namespace ProcessWire;

/**
 * _main.php
 * Main markup file
 *
 * This file contains all the main markup for the site and outputs the regions
 * defined in the initialization (_init.php) file. These regions include:
 *
 *   $title: The page title/headline
 *   $content: The markup that appears in the main content/body copy column
 *   $sidebar: The markup that appears in the sidebar column
 *
 * Of course, you can add as many regions as you like, or choose not to use
 * them at all! This _init.php > [template].php > _main.php scheme is just
 * the methodology we chose to use in this particular site profile, and as you
 * dig deeper, you'll find many others ways to do the same thing.
 *
 * This file is automatically appended to all template files as a result of
 * $config->appendTemplateFile = '_main.php'; in /site/config.php.
 *
 * In any given template file, if you do not want this main markup file
 * included, go in your admin to Setup > Templates > [some-template] > and
 * click on the "Files" tab. Check the box to "Disable automatic append of
 * file _main.php". You would do this if you wanted to echo markup directly
 * from your template file or if you were using a template file for some other
 * kind of output like an RSS feed or sitemap.xml, for example.
 *
 * See the README.txt file for more information.
 *
 */
?><!DOCTYPE html>
<html lang="en">
<head>
	<meta http-equiv="content-type" content="text/html; charset=utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<title><?php echo $title; ?></title>
	<meta name="description" content="<?php echo $page->summary; ?>" />
	<link rel="stylesheet" href="<?php echo $config->urls->templates?>styles/vendor.min.css">
	<link rel="stylesheet" href="<?php echo $config->urls->templates?>styles/app.min.css">
</head>
<body>

	<div id='root'>
		<!-- main content -->
		<?php echo $content; ?>

	</div>
<?=$extra_script;?>
<script type="text/javascript" src="<?php echo $config->urls->templates?>scripts/vendor.min.js"></script>
<script type="text/javascript" src="<?php echo $config->urls->templates?>scripts/app.js"></script>
</body>
</html>
