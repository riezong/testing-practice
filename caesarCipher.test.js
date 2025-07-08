const caesarCipher = require('./caesarCipher');

test('wrapping', () => {
	expect(caesarCipher('xyz', 3)).toBe('abc');
});

test('The shifted lettercase should follow the original lettercase', () => {
	expect(caesarCipher('HeLLo', 3)).toBe('KhOOr');
});

test('Punctuation, spaces, and other non-alphabetical characters should remain unchanged', () => {
	expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
});
