const { expect } = require('chai');
const countLetters = require('../countLetters');

describe('#countLetters', () => {

  it("should return count of individual letters in a string", () => {
    const param = 'aaabbc';
    const result = {'a': 3, 'b': 2, 'c': 1 };
    expect(countLetters(param)).to.deep.equal(result);
  });

  it("should return {} for '' ", () => {
    const param = '';
    const result = {};
    expect(countLetters(param)).to.deep.equal(result);
  });
});