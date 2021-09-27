<?php
/**
 * _s functions and definitions.
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package Simple
 */

define("SIMPLE_BLOCKS_URL", get_template_directory_uri());
define("SIMPLE_BLOCKS_PATH", get_template_directory());

function enqueue_editor_assets() {
    $asset_config_file = sprintf('%s/index.asset.php', SIMPLE_BLOCKS_PATH . '/build');
    $asset_config = require_once $asset_config_file;

    wp_enqueue_script(
        'simple-blocks-js',
        SIMPLE_BLOCKS_URL . '/build/index.js',
        $asset_config['dependencies'],
        $asset_config['version'],
        true
    );

    wp_register_style(
        'simple-blocks-css',
        SIMPLE_BLOCKS_URL . '/src/style.css',
        ['wp-block-library-theme','wp-block-library'],
        filemtime(SIMPLE_BLOCKS_PATH . '/src/editor.css')
    );
}
add_action('enqueue_block_assets', 'enqueue_editor_assets');
