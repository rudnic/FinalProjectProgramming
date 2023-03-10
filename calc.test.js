const { calculate } = require('./calc.js')

test('string with a single number should result in the number itself', () => {
    expect(calculate('1', '2', '+')).toBe(3);
});

test('string with a single number should result in the number itself', () => {
    expect(calculate('1', '2', '*')).toBe(2);
});

test('string with a single number should result in the number itself', () => {
    expect(calculate('10', '5', '/')).toBe(2);
});

test('string with a single number should result in the number itself', () => {
    expect(calculate('10', '5', '-')).toBe(5);
});