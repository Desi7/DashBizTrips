// testing the calculator

const calculator = require('./calculator');

test('adds 1 to 2 equal 3', () => {
    expect(calculator.sum(1,2)).toBe(3)
})

test('subtrakts 3 minus 2 equal 1', () => {
    expect(calculator.sub(3,2)).toBe(1)
})