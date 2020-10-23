// Pangrams
// Determine if a sentence is a pangram. A pangram (Greek: παν γράμμα, pan 
// gramma, “every letter”) is a sentence using every letter of the 
// alphabet at least once. The best known English pangram is:

// The quick brown fox jumps over the lazy dog.

// The alphabet used consists of letters from a to z and is case insensitive. 
// The input will not contain any other symbols.

function isPangram(string) {
  let letterFreq = string.split('').reduce((letterFreq, currentLetter) => {
    currentLetter = currentLetter.toLowerCase();

    if (isSpecialCharacter(currentLetter)) return letterFreq;
    return updateLetterFreq(letterFreq, currentLetter);
  }, {});

  return Object.values(letterFreq).length === 26;
}

function isSpecialCharacter(currentLetter) {
  return (currentLetter === ' ' || currentLetter === '_');
}

function updateLetterFreq(letterFreq, currentLetter) {
  if (!letterFreq[currentLetter]) {
    letterFreq[currentLetter] = 1;
    return letterFreq;
  }

  letterFreq[currentLetter] += 1;
  return letterFreq;
}

console.log(isPangram('abcdefghijklmnopqrstuvwxyz'));
// true

console.log(isPangram('the quick brown fox jumps over the lazy dog'));
// true

console.log(isPangram('the_quick_brown_fox_jumps_over_the_lazy_dog'));
// true

console.log(isPangram('a quick movement of the enemy will jeopardize five gunboats'));
// false
