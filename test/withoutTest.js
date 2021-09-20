const { expect } = require('chai');
const without = require('../without');

describe('#without', () => {

  it("should not alter the original array", () => {
    let param = ["hello", "world", "lighthouse"];
    const itemsToRemove = ["world"];
    without(param, itemsToRemove);
    expect(param).to.equal(param);
  });

  it("should return array without selected items (1 item)", () => {
    let param = [1, 2, 3];
    const itemsToRemove = [2];
    const result = [1, 3];
    expect(without(param, itemsToRemove)).to.deep.equal(result);
  });

  it("should return array without selected items (consecutive items)", () => {
    let param = [1, 2, 3, 4];
    const itemsToRemove = [2, 3];
    const result = [1, 4];
    expect(without(param, itemsToRemove)).to.deep.equal(result);
  });

  it("should return array without selected items (non-consecutive items)", () => {
    let param = [1, 2, 3, 4];
    const itemsToRemove = [1, 3];
    const result = [2, 4];
    expect(without(param, itemsToRemove)).to.deep.equal(result);
  });

  it("should return original array if no items to remove", () => {
    let param = [1, 2, 3, 4];
    const itemsToRemove = [];
    const result = param;
    expect(without(param, itemsToRemove)).to.deep.equal(result);
  });

  it("should return original array if items to remove are not found", () => {
    let param = [1, 2, 3, 4];
    const itemsToRemove = [5];
    const result = param;
    expect(without(param, itemsToRemove)).to.deep.equal(result);
  });

  it("should return empty array if all items to remove", () => {
    let param = [1, 2, 3, 4];
    const itemsToRemove = param;
    const result = [];
    expect(without(param, itemsToRemove)).to.deep.equal(result);
  });

  it("should return empty array if original array is empty", () => {
    let param = [];
    const itemsToRemove = true;
    const result = [];
    expect(without(param, itemsToRemove)).to.deep.equal(result);
  });

});