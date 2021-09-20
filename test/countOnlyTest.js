const { expect } = require('chai');
const countOnly = require('../countOnly');

describe('#countOnly', () => {

  it("should count items in a list, given a reference object", () => {
    const param1 = [ "Karl", "Salima", "Agouhanna",
      "Fang", "Kavith", "Jason", "Salima", "Fang", "Joe"];
    const param2 = { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false };
    const result = { "Jason": 1, "Fang": 2 };
    expect(countOnly(param1, param2)).to.deep.equal(result);
  });

  it("should return {} given empty params", () => {
    const param1 = [];
    const param2 = {};
    const result = {};
    expect(countOnly(param1, param2)).to.deep.equal(result);
  });

});