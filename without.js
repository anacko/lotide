const without = function(source, itemsToRemove) {
  let destiny = [];
  for (let item of source) {
    if (!itemsToRemove.includes(item)) {
      destiny.push(item);
    }
  }
  return destiny;
};

module.exports = without;