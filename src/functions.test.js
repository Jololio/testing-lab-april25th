const {
    returnTwo,
    greeting,
    add,
    subtract,
    multiply,
    divide
} = require('./functions')

test('returnTwo should return 2', () => {
    expect(returnTwo()).toEqual(2)
})

test('greeting should check these specific names to see if true', () => {
    expect(greeting('James')).toEqual('Hello, James.')
    expect(greeting('Jill')).toEqual('Hello, Jill.')
})



describe('Math functions', () => {
    test('add should add the 2 numbers together correctly', () => {
        expect(add(1,2)).toEqual(3)
        expect(add(5,9)).toEqual(14)
    })
    test('subtract should subtract the 2 numbers', () => {
        expect(subtract(5,1)).toEqual(4)
        expect(subtract(10,10)).toEqual(0)
    })
    test('multiply should multiply the 2 numbers', () => {
        expect(multiply(2,2)).toEqual(4)
        expect(multiply(10,10)).toEqual(100)
    })
    test('divide should divide the 2 numbers', () => {
        expect(divide(10,2)).toEqual(5)
        expect(divide(20,5)).toEqual(4)
    })
})