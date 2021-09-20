const { expect } = require('chai');
const findKey = require('../findKey');

describe('#findKey', () => {

  it("should return a key object for a given value criteria (number)", () => {
    const paramObj = {
      plate: { size: "medium", number: 4, fragile: true },
      fork:  { size: "small", number: 4, fragile: false },
      knife: { size: "small", number: 2, fragile: false },
      cup: { size: "small", number: 4, fragile: true },
      bowl: { size: "big", number: 1, fragile: false },
      bottle: { size: "big", number: 1, fragile: true}
    };
    const itemToFind = x => x.number === 2;
    const result = "knife";
    expect(findKey(paramObj, itemToFind)).to.equal(result);
  });

  it("should return a key object for a given value criteria (string)", () => {
    const paramObj = {
      plate: { size: "medium", number: 4, fragile: true },
      fork:  { size: "small", number: 4, fragile: false },
      knife: { size: "small", number: 2, fragile: false },
      cup: { size: "small", number: 4, fragile: true },
      bowl: { size: "big", number: 1, fragile: false },
      bottle: { size: "big", number: 1, fragile: true}
    };
    const itemToFind = x => x.size === "medium";
    const result = "plate";
    expect(findKey(paramObj, itemToFind)).to.equal(result);
  });

  it("should return the key given a value property (ex. array.length)", () => {
    const paramObj = {
      cake: ["sugar", "butter", "egg", "flour", "vanilla extract", "baking powder", "milk"],
      pancake: ["flour", "baking powder", "salt", "milk"],
      cookie: ["flour", "oats", "baking powder", "butter", "sugar", "egg", "vanilla extract"],
      bread: ["water", "salt", "oil", "flour", "yeast"],
      pizza: ["water", "yeast", "flour", "oil", "sugar", "salt"]
    };
    const itemToFind = x => x.length < 5;
    const result = "pancake";
    expect(findKey(paramObj, itemToFind)).to.equal(result);
  });

  it("should return the key given a value operation/check (ex. array.includes())", () => {
    const paramObj = {
      cake: ["sugar", "butter", "egg", "flour", "vanilla extract", "baking powder", "milk"],
      pancake: ["flour", "baking powder", "salt", "milk"],
      cookie: ["flour", "oats", "baking powder", "butter", "sugar", "egg", "vanilla extract"],
      bread: ["water", "salt", "oil", "flour", "yeast"],
      pizza: ["water", "yeast", "flour", "oil", "sugar", "salt"]
    };
    const itemToFind = x => x.includes("oats");
    const result = "cookie";
    expect(findKey(paramObj, itemToFind)).to.equal(result);
  });

  it("should return undefined if no item fits the criteria", () => {
    const paramObj = {
      cake: ["sugar", "butter", "egg", "flour", "vanilla extract", "baking powder", "milk"],
      pancake: ["flour", "baking powder", "salt", "milk"],
      cookie: ["flour", "oats", "baking powder", "butter", "sugar", "egg", "vanilla extract"],
      bread: ["water", "salt", "oil", "flour", "yeast"],
      pizza: ["water", "yeast", "flour", "oil", "sugar", "salt"]
    };
    const itemToFind = x => x.includes("margerine");
    const result = undefined;
    expect(findKey(paramObj, itemToFind)).to.equal(result);
  });

  it("should return undefined for empty object", () => {
    const paramObj = {};
    const itemToFind = x => x;
    const result = undefined;
    expect(findKey(paramObj, itemToFind)).to.equal(result);
  });

});