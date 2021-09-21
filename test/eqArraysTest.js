const { expect } = require('chai');
const eqArrays = require('../eqArrays');

describe('#eqArrays', () => {

  it("should evaluate true for equal arrays", () => {
    const param1 = [1, 2, 3];
    const param2 = [1, 2, 3];
    expect(eqArrays(param1, param2)).to.be.true;
  });

  it("should evaluate false for different arrays", () => {
    const param1 = [1, 2, 3];
    const param2 = [3, 2, 1];
    expect(eqArrays(param1, param2)).to.be.false;
  });

  it("should allow for nested arrays", () => {
    const param1 = [1, [[2], 3]];
    const param2 = [1, [[2], 3]];
    expect(eqArrays(param1, param2)).to.be.true;
  });

  it("should evaluate true for empty arrays", () => {
    const param1 = [];
    const param2 = [];
    expect(eqArrays(param1, param2)).to.be.true;
  });

});