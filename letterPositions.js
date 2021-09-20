const letterPositions = function(sentence) {
  const results = {};
  sentence = sentence.split("");

  let letter = "";
  for (let i = 0; i < sentence.length; i++) {
    letter = sentence[i];
    if (letter !== " ") {
      results[letter] ? results[letter].push(i) : results[letter] = [i];
    }
  }
  return results;
};

module.exports = letterPositions;