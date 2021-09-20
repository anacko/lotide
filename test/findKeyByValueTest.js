const { expect } = require('chai');
const findKeyByValue = require('../findKeyByValue');

describe('#findKeyByValue', () => {

  it("should return a key object for a given value criteria (string)", () => {
    const paramObj = {a: "A", b: "B", c: "C"};
    const paramVal = "C";
    const result = "c";
    expect(findKeyByValue(paramObj, paramVal)).to.equal(result);
  });

  it("should return a key object for a given value criteria (number)", () => {
    const paramObj = {a: 1, b: 2, c: 3};
    const paramVal = 2;
    const result = "b";
    expect(findKeyByValue(paramObj, paramVal)).to.equal(result);
  });

  it("should return undefined if no item fits the criteria", () => {
    const paramObj = {a: 1, b: 2, c: 3};
    const paramVal = 4;
    const result = undefined;
    expect(findKeyByValue(paramObj, paramVal)).to.equal(result);
  });

  it("should return undefined for empty object", () => {
    const paramObj = {};
    const paramVal = true;
    const result = undefined;
    expect(findKeyByValue(paramObj, paramVal)).to.equal(result);
  });
});