const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

// Import SVG as React component using @svgr/webpack.
// https://www.npmjs.com/package/@svgr/webpack
// import { ReactComponent as Logo } from '../bv-logo.svg';

// Import file as base64 encoded URI using url-loader.
// https://www.npmjs.com/package/url-loader
// import logoWhiteURL from '../bv-logo-white.svg';

// https://wordpress.org/gutenberg/handbook/designers-developers/developers/block-api/block-registration/
registerBlockType( 'test/static', {
	title: __( 'Like & Subscribe', 'test' ),
	// icon: { src: Logo },
	category: 'test',

	// https://wordpress.org/gutenberg/handbook/designers-developers/developers/block-api/block-edit-save/
	edit() {
		return (
			<div className="test-block test-static">
				<figure className="test-logo">
					<img src={ logoWhiteURL } alt="logo" />
				</figure>
				<div className="test-info">
					<h3 className="test-title">
						{ __( 'The Binaryville Podcast', 'test' ) }
					</h3>
					<div className="test-cta">
						<a href="#">{ __( 'Like & Subscribe!', 'test' ) }</a>
					</div>
				</div>
			</div>
		);
	},
	save() {
		// return (
		//   <div className='test-block test-static'>
		//     <figure className='test-logo'>
		//       <img src={logoWhiteURL} alt='logo' />
		//     </figure>
		//     <div className='test-info'>
		//       <h3 className='test-title'>
		//         {__('The Binaryville Podcast', 'test')}
		//       </h3>
		//       <div className='test-cta'>
		//         <a href='/subscribe'>{__('Like & Subscribe!', 'test')}</a>
		//       </div>
		//     </div>
		//   </div>
		// );
	},
} );
