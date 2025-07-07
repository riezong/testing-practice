const capitalize = require('./capitalize');

test('capitalise first letter of capitalize', () => {
	expect(capitalize('capitalize')).toBe('Capitalize');
});
