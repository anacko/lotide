const { expect } = require('chai');
const tail = require('../tail');

describe('#tail', () => {

  it('should not alter original array', () => {
    let param = [1, 2, 3];
    tail(param);
    expect(param).to.deep.equal(param);
  });

  it('should return [2, 3] for [1, 2, 3]', () => {
    const param = [1, 2, 3];
    const result = [2, 3];
    expect(tail(param)).to.deep.equal(result);
  });

  it('should return ["Lighthouse", "Labs"] for ["Hello", "Lighthouse", "Labs"]', () => {
    const param = ["Hello", "Lighthouse", "Labs"];
    const result = ["Lighthouse", "Labs"];
    expect(tail(param)).to.deep.equal(result);
  });

  it('should return [] for []', () => {
    const param = [];
    const result = [];
    expect(tail(param)).to.deep.equal(result);
  });

});