const { expect } = require('chai');
const eqObjects = require('../eqObjects');

describe('#eqObjects', () => {

  it("should evaluate true for identical objects (same entry order)", () => {
    const param1 = { a: "1", b: "2" };
    const param2 = { a: "1", b: "2" };
    expect(eqObjects(param1, param2)).to.be.true;
  });

  it("should evaluate true for identical objects (different entry order)", () => {
    const param1 = { a: "1", b: "2" };
    const param2 = { b: "2", a: "1" };
    expect(eqObjects(param1, param2)).to.be.true;
  });
  
  it("should evaluate false for different objects", () => {
    const param1 = { a: "1", b: "2", c: "3"};
    const param2 = { b: "2", a: "1" };
    expect(eqObjects(param1, param2)).to.be.false;
  });

  it("should allow for arrays as values", () => {
    const param1 = { a: "1", b: ["2", 3]};
    const param2 = { b: ["2", 3], a: "1" };
    expect(eqObjects(param1, param2)).to.be.true;
  });

  it("should allow for nested objects", () => {
    const param1 = { a: "1", b: {c: "2", d: 3}};
    const param2 = { b: {d: 3, c: "2"}, a: "1" };
    expect(eqObjects(param1, param2)).to.be.true;
  });

  it("should evaluate true for empty objects", () => {
    const param1 = {};
    const param2 = {};
    expect(eqObjects(param1, param2)).to.be.true;
  });
  

});

/*

assertEqual(eqObjects(ab, ba), true);

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true);

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false);


assertEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true) // => true

assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), false) // => false
assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }), false) // => false
 */