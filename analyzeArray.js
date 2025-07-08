function analyzeArray(array) {
	let sum = array.reduce((acc, curr) => acc + curr, 0);
	let length = array.length;
	let average = sum / length;
	let min = Math.min(...array);
	let max = Math.max(...array);

	return { average: average, min: min, max: max, length: length };
}

const object = analyzeArray([1, 8, 3, 4, 2, 6]);
console.log(object);

module.exports = analyzeArray;
