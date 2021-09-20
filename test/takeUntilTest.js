const { expect } = require('chai');
const takeUntil = require('../takeUntil');

describe('#takeUntil', () => {

  it("should return part of an array until some criteria is met (ex. elem equals value - string)", () => {
    const param = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
    const crit = x => x === ',';
    const result = ['I\'ve', 'been', 'to', 'Hollywood'];
    expect(takeUntil(param, crit)).to.deep.equal(result);
  });

  it("should return part of an array until some criteria is met (ex. elem equals value - integer)", () => {
    const param = [1, 2, 5, 7, 2, -1, 2, 4, 5];
    const crit = x => x === 7;
    const result = [1, 2, 5];
    expect(takeUntil(param, crit)).to.deep.equal(result);
  });

  it("should return part of an array until some criteria is met (ex. elem lesser than value)", () => {
    const param = [1, 2, 5, 7, 2, -1, 2, 4, 5];
    const crit = x => x < 0;
    const result = [1, 2, 5, 7, 2];
    expect(takeUntil(param, crit)).to.deep.equal(result);
  });

  it("should return original array if criteria is not met", () => {
    const param = [1, 2, 5, 7, 2, -1, 2, 4, 5];
    const crit = x => x > 10;
    const result = param;
    expect(takeUntil(param, crit)).to.deep.equal(result);
  });

  it("should return [] for []", () => {
    const param = [];
    const crit = x => x;
    const result = [];
    expect(takeUntil(param, crit)).to.deep.equal(result);
  });

});