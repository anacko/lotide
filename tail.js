const tail = function(arr) {
  let finalArr = [];
  for (let i = 1; i < arr.length; i++) {
    finalArr.push(arr[i]);
  }
  return finalArr;
};

module.exports = tail;