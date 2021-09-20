const eqArrays = function(a, b) {
  
  let c = true;

  if (a.length !== b.length) {
    c = c && false;

  } else {
    for (let i = 0; i < a.length; i++) {
      if (Array.isArray(a[i])) {
        c = c && eqArrays(a[i], b[i]);

      } else if (a[i] !== b[i]) {
        c = c && false;
      }
    }
  }
  return c;
};

module.exports = eqArrays;