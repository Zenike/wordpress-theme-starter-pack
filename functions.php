<?php

//////////////////////////////////////////////////////////////////////////////////////
///// Import des fichiers css et js du theme
//////////////////////////////////////////////////////////////////////////////////////
function theme_scripts_and_css() {
	wp_enqueue_script('scriptfile', get_stylesheet_directory_uri() . '/assets/js/js-dist.js', array('jquery'));
	wp_enqueue_style('stylefile', get_stylesheet_directory_uri() . '/assets/css/style.css');
}
add_action('wp_enqueue_scripts', 'theme_scripts_and_css');
