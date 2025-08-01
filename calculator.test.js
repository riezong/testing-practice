const calculator = require('./calculator');

test('add', () => {
	expect(calculator.add(1, 2)).toBe(3);
});

test('subtract', () => {
	expect(calculator.subtract(1, 2)).toBe(-1);
});

test('divide', () => {
	expect(calculator.divide(1, 2)).toBe(0.5);
});

test('multiply', () => {
	expect(calculator.multiply(1, 2)).toBe(2);
});
