const { expect } = require('chai');
const map = require('../map');

describe('#map', () => {

  it("should return the required information from each element of an array", () => {
    const param1 = ["ground", "control", "to", "major", "tom"];
    const param2 = word => word[0];
    const result = ["g", "c", "t", "m", "t"];
    expect(map(param1, param2)).to.deep.equal(result);
  });

  it("should perform an action on each element of an array", () => {
    const param1 = ["ground", "control", "to", "major", "tom"];
    const param2 = word => word.toUpperCase();
    const result = ["GROUND", "CONTROL", "TO", "MAJOR", "TOM"];
    expect(map(param1, param2)).to.deep.equal(result);
  });

  it("should return [] to empty params", () => {
    const param1 = [];
    const param2 = x => x;
    const result = [];
    expect(map(param1, param2)).to.deep.equal(result);
  });

});