<?php
/**
 * _s functions and definitions.
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package _s
 */

/**
 * Get all the include files for the theme.
 *
 * @author WebDevStudios
 */
function _s_get_theme_include_files() {
	return [
		'inc/setup.php', // Theme set up. Should be included first.
		'inc/compat.php', // Backwards Compatibility.
		'inc/customizer/customizer.php', // Customizer additions.
		'inc/extras.php', // Custom functions that act independently of the theme templates.
		'inc/hooks.php', // Load custom filters and hooks.
		'inc/security.php', // WordPress hardening.
		'inc/scaffolding.php', // Scaffolding.
		'inc/scripts.php', // Load styles and scripts.
		'inc/template-tags.php', // Custom template tags for this theme.
	];
}

foreach ( _s_get_theme_include_files() as $include ) {
	require trailingslashit( get_template_directory() ) . $include;
}

/**
 * Creating a custom test block category.
 *
 * @param   array $categories     List of block categories.
 * @return  array
 */
function test_block_category( $categories ) {

	$custom_block = array(
		'slug'  => 'test',
		'title' => esc_html__( 'Test React Blocks', 'test' ),
		'icon' => 'block-default',
	);

	$categories_sorted = array();
	$categories_sorted[0] = $custom_block;

	foreach ( $categories as $category ) {
		$categories_sorted[] = $category;
	}

	return $categories_sorted;
}
add_filter( 'block_categories_all', 'test_block_category' );

/**
 * Registers all block assets so that they can be enqueued through the Block Editor in
 * the corresponding context.
 *
 * @link https://wordpress.org/gutenberg/handbook/designers-developers/developers/block-api/block-registration/
 */
add_action( 'init', 'test_register_blocks' );

function test_register_blocks() {

	// If Block Editor is not active, bail.
	if ( ! function_exists( 'register_block_type' ) ) {
		return;
	}

	// Retister the block editor script.
	wp_register_script(
		'test-editor-script',											// label
		get_template_directory_uri() . '/build/index.js',				// script file
		array( 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor' ),		// dependencies
		'0.0.1'															// set version as file last modified time
	);

	// Register the block editor stylesheet.
	// wp_register_style(
	// 	'test-editor-styles',											// label
	// 	plugins_url( 'build/editor.css', __FILE__ ),					// CSS file
	// 	array( 'wp-edit-blocks' ),										// dependencies
	// 	filemtime( plugin_dir_path( __FILE__ ) . 'build/editor.css' )	// set version as file last modified time
	// );

	// Register the front-end stylesheet.
	wp_register_style(
		'test-front-end-styles',										// label
		get_template_directory_uri() . 'build/index.css',				// CSS file
		array( ),														// dependencies
		'0.0.1'	// set version as file last modified time
	);

	// Array of block created in this plugin.
	$blocks = [
		'test/tailwind'
	];
	
	// Loop through $blocks and register each block with the same script and styles.
	foreach( $blocks as $block ) {
		register_block_type( $block, array(
			'editor_script' => 'test-editor-script',				// Calls registered script above
			// 'editor_style' => 'test-editor-styles',					// Calls registered stylesheet above
			'style' => 'test-front-end-styles',						// Calls registered stylesheet above
		) );	  
	}

}