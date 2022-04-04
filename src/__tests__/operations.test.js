const { sum , multiply, divide}  = require('../operations.js');

test('adds 1 more 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('multiply 2 by 3 to equal 6', () => {
  expect(multiply(2, 3)).toBe(6);
});

test('divide 10 by 2 to equal 5', () => {
  expect(divide(10, 2)).toBe(5);
});
