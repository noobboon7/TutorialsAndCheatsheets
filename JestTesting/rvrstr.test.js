const reverseString = require('./rvrstr');

test('reverseString function exists', () => {
  expect(reverseString).toBeDefined();
});

test('should reverse string', () => {
  expect(reverseString('str')).toEqual('rts');
});

test('should reverse string Uppercase', () => {
  expect(reverseString('Str')).toEqual('rts');
});
