const message = require('./message');

test('Hello World in function is equal Hello World', () => {
  expect(message()).toBe("Hello World");
});
