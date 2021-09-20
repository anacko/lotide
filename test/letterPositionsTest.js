const { expect } = require('chai');
const letterPositions = require('../letterPositions');

describe('#letterPositions', () => {

  it("should return the positions of individual letters in a string", () => {
    const param = 'aaabbc';
    const result = {'a': [0, 1, 2], 'b': [3, 4], 'c': [ 5 ] };
    expect(letterPositions(param)).to.deep.equal(result);
  });

  it("should return {} for '' ", () => {
    const param = '';
    const result = {};
    expect(letterPositions(param)).to.deep.equal(result);
  });
});