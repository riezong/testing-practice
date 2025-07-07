const reverseString = require('./reverseString');

test('reverse string', () => {
	expect(reverseString('reverse')).toBe('esrever');
});
