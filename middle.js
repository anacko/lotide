const middle = function(arr) {
  let pos;
  if (arr.length < 3) {
    return [];
  }
  if (arr.length % 2 === 1){
    pos = (arr.length-1)/2;
    return arr[pos];
  } else {
    pos = (arr.length)/2;
    return [arr[pos-1], arr[pos]];
  }
};

module.exports = middle;