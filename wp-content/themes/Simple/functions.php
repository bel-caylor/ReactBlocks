<?php
/**
 * _s functions and definitions.
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package Simple
 */

// define("SIMPLE_BLOCKS_URL", get_template_directory_uri());
// define("SIMPLE_BLOCKS_PATH", get_template_directory());

// function enqueue_editor_assets() {
//     $asset_config_file = sprintf('%s/index.asset.php', SIMPLE_BLOCKS_PATH . '/build');
//     $asset_config = require_once $asset_config_file;

//     wp_register_script( 'simple-blocks-js', 'http://react-blocks.localdev/wp-content/themes/simple/build/index.js', $asset_config['dependencies'], $asset_config['version'], true ); 
// 	wp_enqueue_script( 'simple-blocks-js' );
//     // wp_enqueue_script(
//     //     'simple-blocks-js',
//     //     SIMPLE_BUILD_URL . '/index.js',
//     //     $asset_config['dependencies'],
//     //     $asset_config['version']
//     // );

//     wp_register_style(
//         'simple-blocks-css',
//         SIMPLE_BLOCKS_URL . '/src/style.css',
//         ['wp-block-library-theme','wp-block-library'],
//         filemtime(SIMPLE_BLOCKS_PATH . '/src/editor.css')
//     );
// }
// add_action('enqueue_block_assets', 'enqueue_editor_assets');



/**
 * Creating a custom simple block category.
 *
 * @param   array $categories     List of block categories.
 * @return  array
 */
// function simple_block_category( $categories ) {

// 	$custom_block = array(
// 		'slug'  =>  'simple',
// 		'title' => esc_html__( 'Simple React Blocks', 'simple' ),
// 		'icon' => 'block-default',
// 	);

// 	$categories_sorted = array();
// 	$categories_sorted[0] = $custom_block;

// 	foreach ( $categories as $category ) {
// 		$categories_sorted[] = $category;
// 	}

// 	return $categories_sorted;
// }
// add_filter( 'block_categories_all',  'simple_block_category' );

/**
 * Registers all block assets so that they can be enqueued through the Block Editor in
 * the corresponding context.
 *
 * @link https://wordpress.org/gutenberg/handbook/designers-developers/developers/block-api/block-registration/
 */
// add_action( 'init', 'simple_register_blocks' );

// function simple_register_blocks() {

// 	// If Block Editor is not active, bail.
// 	if ( ! function_exists( 'register_block_type' ) ) {
// 		return;
// 	}

// 	// Retister the block editor script.
// 	wp_register_script(
// 		'simple-editor-script',											// label
// 		get_template_directory_uri() . '/build/index.js',				// script file
// 		array( 'wp-element', 'wp-polyfill' ),		                    // dependencies
// 		'bab2057406a952d94b04e97037198d46'								// set version as file last modified time
// 	);

// 	// Register the block editor stylesheet.
// 	// wp_register_style(
// 	// 	'simple-editor-styles',											// label
// 	// 	plugins_url( 'build/editor.css', __FILE__ ),					// CSS file
// 	// 	array( 'wp-edit-blocks' ),										// dependencies
// 	// 	filemtime( plugin_dir_path( __FILE__ ) . 'build/editor.css' )	// set version as file last modified time
// 	// );

// 	// Register the front-end stylesheet.
// 	wp_register_style(
// 		'simple-front-end-styles',										// label
// 		get_template_directory_uri() . 'src/index.css',				    // CSS file
// 		array( ),														// dependencies
// 		'0.0.1'	// set version as file last modified time
// 	);

// 	// Array of block created in this plugin.
// 	$blocks = [
// 		'simple/test'
// 	];
	
// 	// Loop through $blocks and register each block with the same script and styles.
// 	foreach( $blocks as $block ) {
// 		register_block_type( $block, array(
// 			'editor_script' => 'simple-editor-script',				    // Calls registered script above
// 			// 'editor_style' => 'simple-editor-styles',				// Calls registered stylesheet above
// 			'style' => 'simple-front-end-styles',						// Calls registered stylesheet above
// 		) );	  
// 	}

// }

/**
 * Registers all block assets so that they can be enqueued through the Block Editor in
 * the corresponding context.
 *
 * @link https://wordpress.org/gutenberg/handbook/designers-developers/developers/block-api/block-registration/
 */
add_action( 'init', 'podkit_register_blocks' );

function podkit_register_blocks() {

	// If Block Editor is not active, bail.
	if ( ! function_exists( 'register_block_type' ) ) {
		return;
	}

	// Retister the block editor script.
	wp_register_script(
		'podkit-editor-script',											// label
		plugins_url( 'build/index.js', __FILE__ ),						// script file
		array( 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor' ),		// dependencies
		filemtime( plugin_dir_path( __FILE__ ) . 'build/index.js' )		// set version as file last modified time
	);

	// Register the block editor stylesheet.
	wp_register_style(
		'podkit-editor-styles',											// label
		plugins_url( 'build/editor.css', __FILE__ ),					// CSS file
		array( 'wp-edit-blocks' ),										// dependencies
		filemtime( plugin_dir_path( __FILE__ ) . 'build/editor.css' )	// set version as file last modified time
	);

	// Register the front-end stylesheet.
	wp_register_style(
		'podkit-front-end-styles',										// label
		plugins_url( 'build/style.css', __FILE__ ),						// CSS file
		array( ),														// dependencies
		filemtime( plugin_dir_path( __FILE__ ) . 'build/style.css' )	// set version as file last modified time
	);

	// Array of block created in this plugin.
	$blocks = [
		'podkit/static'
	];
	
	// Loop through $blocks and register each block with the same script and styles.
	foreach( $blocks as $block ) {
		register_block_type( $block, array(
			'editor_script' => 'podkit-editor-script',					// Calls registered script above
			'editor_style' => 'podkit-editor-styles',					// Calls registered stylesheet above
			'style' => 'podkit-front-end-styles',						// Calls registered stylesheet above
		) );	  
	}

	if ( function_exists( 'wp_set_script_translations' ) ) {
	/**
	 * Adds internationalization support. 
	 * 
	 * @link https://wordpress.org/gutenberg/handbook/designers-developers/developers/internationalization/
	 * @link https://make.wordpress.org/core/2018/11/09/new-javascript-i18n-support-in-wordpress/
	 */
	wp_set_script_translations( 'podkit-editor-script', 'podkit', plugin_dir_path( __FILE__ ) . '/languages' );
	}

}