const { expect } = require('chai');
const middle = require("../middle");

describe('middle', () => {

  it("should return a single element if length is odd", () => {
    const param = [1, 2, 3];
    expect(middle(param)).to.not.be.extensible; // primitives are never extensible
  });

  it("should return an array if length is even", () => {
    const param = [1, 2, 3, 4];
    expect(middle(param)).to.be.an('array');
  });

  it("should return 2 for [1, 2, 3]", () => {
    const param = [1, 2, 3];
    const result = 2;
    expect(middle(param)).to.equal(result);
  });

  it("should return [2, 3] for [1, 2, 3, 4]", () => {
    const param = [1, 2, 3, 4];
    const result = [2, 3];
    expect(middle(param)).to.deep.equal(result);
  });

  it("should return [] for [1]", () => {
    const param = [1];
    const result = [];
    expect(middle(param)).to.deep.equal(result);
  });

  it("should return [] for [1, 2]", () => {
    const param = [1, 2];
    const result = [];
    expect(middle(param)).to.deep.equal(result);
  });

  it("should return [] for []", () => {
    const param = [];
    const result = [];
    expect(middle(param)).to.deep.equal(result);
  });

});