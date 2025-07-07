function capitalize(string) {
	let word = String(string).trim();
	let capFirstLetter = word.charAt(0).toUpperCase();
	let restOfString = word.substring(1);
	let output = capFirstLetter + restOfString;
	return output;
}
module.exports = capitalize;
