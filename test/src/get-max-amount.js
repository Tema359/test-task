const lookingForBananas = {
  getRandomBetween(min, max) {
    if (
      typeof min !== 'number' ||
      typeof max !== 'number' ||
      min < 0 || min > 20 ||
      max < 0 || max > 20
      ) {
      throw new Error('Min and Max must be a positive numbers')
    }
    return Math.floor(Math.random() * (max - min + 1) + min);
  },

  createMatrix(row, col) {
    if(
      typeof row !== 'number' ||
      typeof col !== 'number' ||
      row <= 0 || col <= 0
      ) {
      throw new Error('Wrong argument')
    }
    let matrix = [];
    for (let i = 0; i < row; i++) {
      matrix[i] = [];
      for (let k = 0; k < col; k++) {
        matrix[i][k] = getRandomBetween(1, 20);
      }
    }
    return matrix;
  },

  getMaxAmountOfBananas(matrix) {
    const maxColumnValues = [];
    for (let i = 0; i < matrix.length; i++) {
      const columnValues = [];
      for (let k = 0; k < matrix[i].length; k++) {
        columnValues.push(matrix[k][i]);
      }
      maxColumnValues.push(Math.max(...columnValues));
    }
    return maxColumnValues.reduce((sum, el) => {
      return sum + el;
    }, 0);
  },
};

module.exports = lookingForBananas;