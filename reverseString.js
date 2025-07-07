function reverseString(string) {
	const output = [];
	for (let i = string.length; i >= 0; i--) {
		output.push(string.charAt(i));
	}
	return output.join('');
}

module.exports = reverseString;
