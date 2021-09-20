const countLetters = function(str) {
  while (str.indexOf(" ") !== -1) {
    str = str.replace(" ","");
  }
  str = str.split("");
  let letterCount = {};
  for (const letter of str) {
    letterCount[letter] ? letterCount[letter]++ : letterCount[letter] = 1;
  }

  return letterCount;
};

module.exports = countLetters;