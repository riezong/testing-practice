const analyzeArray = require('./analyzeArray');

test('function that takes an array of numbers and returns an object with the following properties: average, min, max, and length', () => {
	const object = {
		average: 4,
		min: 1,
		max: 8,
		length: 6,
	};
	expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual(object);
});
