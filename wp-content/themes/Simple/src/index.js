const { registerBlockType } = wp.blocks;

registerBlockType('simple/custom-block', {
    title: 'Simple Block',
    description: 'Test Simple Block',
    category: 'text',
    edit: () => (
        <div>Hello</div>
    ),
    save: () => (
        <div>Hello</div>
    )
});