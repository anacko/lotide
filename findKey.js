const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    return console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKey = function(obj, callback) {
  for (const item in obj) {
    if (callback(obj[item])) {
      return item;
    }
  }
};

const itemsOnTheTable = {
  plate: { size: "medium", number: 4, fragile: true },
  fork:  { size: "small", number: 4, fragile: false },
  knife: { size: "small", number: 2, fragile: false },
  cup: { size: "small", number: 4, fragile: true },
  bowl: { size: "big", number: 1, fragile: false },
  bottle: { size: "big", number: 1, fragile: true}
};

assertEqual(findKey(itemsOnTheTable, x => x.number === 2), "knife");
assertEqual(findKey(itemsOnTheTable, x => x.size === "medium"), "plate");

const ingredientsForFood = {
  cake: ["sugar", "butter", "egg", "flour", "vanilla extract", "baking powder", "milk"],
  pancake: ["flour", "baking powder", "salt", "milk"],
  cookie: ["flour", "oats", "baking powder", "butter", "sugar", "egg", "vanilla extract"],
  bread: ["water", "salt", "oil", "flour", "yeast"],
  pizza: ["water", "yeast", "flour", "oil", "sugar", "salt"]
};

assertEqual(findKey(ingredientsForFood, x => x.length < 5), "pancake");
assertEqual(findKey(ingredientsForFood, x => x.includes("oats")), "cookie");
