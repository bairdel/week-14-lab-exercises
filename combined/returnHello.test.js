const hello = require('./returnHello.js');

test("returns a valid English hello", () => {
  expect(hello.generateHelloString('english')).toBe('Hello');
});

test("returns a valid Gurmukhi hello", () => {
  expect(hello.generateHelloString('gurmukhi')).toBe('ਸਤਿ ਸ੍ਰੀ ਅਕਾਲ');
});

test("returns a valid Italian hello", () => {
  expect(hello.generateHelloString('italian')).toBe('Bonjourno');
});

test("returns a valid German hello", () => {
  expect(hello.generateHelloString('german')).toBe('Guten Tag');
});

test("returns a valid French hello", () => {
  expect(hello.generateHelloString('french')).toBe('Bonjour');
});

test("Throws on unknown languages", () => {
  expect(() => { hello.generateHelloString('norge') }).toThrow(Error(`Unknown language norge`))
});
