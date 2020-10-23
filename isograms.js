// Isograms
// Determine if a word or phrase is an isogram.

// An isogram (also known as a “nonpattern word”) is a word or phrase without 
// a repeating letter, however spaces and hyphens are allowed to appear 
// multiple times.

function isIsogram(string) {
  let letterFrequency = {};

  for (letter of string) {
    if (letter === ' ' || letter === '-') continue;
    
    if (!letterFrequency[letter]) {
      letterFrequency[letter] = 1;
      continue;
    }

    return false;
  }

  return true;
}

console.log(isIsogram('duplicates')); 
// true

console.log(isIsogram('eleven')); 
// false

console.log(isIsogram('subdermatoglyphic')); 
// true

console.log(isIsogram('alphabet')); 
// false

console.log(isIsogram('éléphant')); 
// false

console.log(isIsogram('six-year-old')); 
// true
