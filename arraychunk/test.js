const arraychunk = require('./arraychunk');

test('Chunk Array [1,2,3] with size 2', () => {
    expect(arraychunk([1,2,3], 2)).toEqual([[1,2], [3]]);
})