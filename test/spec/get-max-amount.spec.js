const myLocalVariable1 = require('../src/get-max-amount');

describe('Max amount of bananas', () => {
  it('should return error if at least one type of argument is not a number or is greater than 20', () => {
    expect( function(){
  myLocalVariable1.getRandomBetween(21, 44)
} )
    .toThrow(new Error('Min and Max must be a positive numbers'));
  });

  it('correct max random number less than or equal 20', () => {
    const result = myLocalVariable1.getRandomBetween(0, 20);
    expect(result).toBeLessThanOrEqual(20);
  });

  it('should return error if at least one argument’s type is not a number', () => {
    expect( function(){
  myLocalVariable1.createMatrix('3',2)
} ).toThrow(new Error('Wrong argument'));
  });

  it('correct max amount of bananas for this matrix equal 12', () => {
    const result = myLocalVariable1.getMaxAmountOfBananas([
      [1, 3, 3],
      [2, 1, 4],
      [0, 6, 4],
    ]);
    expect(result).toBe(12);
  });
});