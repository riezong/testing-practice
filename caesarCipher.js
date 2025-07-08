function caesarCipher(string, shiftFactor) {
	const shiftedOutput = [];

	let input = string;
	console.log(input);
	for (let i = 0; i < input.length; i++) {
		let charCode = input.charCodeAt(i);
		let newCharCode = charCode + shiftFactor;

		const regEx = /[a-zA-Z]/;
		// punctuation
		if (regEx.test(input.charAt(i)) !== true) {
			console.log('true');
			newCharCode = input.charCodeAt(i);
		}

		// wrapping
		if (newCharCode >= 123) {
			newCharCode = newCharCode - 122 + 96;
		}

		shiftedOutput.push(String.fromCharCode(newCharCode));
	}

	return shiftedOutput.join('');
}

console.log(caesarCipher('Hello, World!', 3));

module.exports = caesarCipher;
