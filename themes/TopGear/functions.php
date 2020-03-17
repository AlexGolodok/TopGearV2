<?php

/**
 * Enqueue scripts and styles.
 */
function surfing_scripts() {

	wp_enqueue_style( 'surfing-bootstrap',  get_template_directory_uri() . '/css/bootstrap.min.css');

	wp_enqueue_style( 'surfing-custom',  get_stylesheet_uri() );

	wp_enqueue_script( 'popper-js', 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js', array( 'jquery' ), '1.14.7', true );
	wp_enqueue_script( 'bootstrap-js', 'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js', array( 'jquery' ), '4.3.1', true );
}
add_action( 'wp_enqueue_scripts', 'surfing_scripts' );