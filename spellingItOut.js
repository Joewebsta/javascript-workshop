// Spelling It Out
// Create a function which takes in a word and spells it out, by consecutively 
// adding letters until the full word is completed.

function spellOut(word) {
  return word.split('').reduce((array, letter, idx) => {
    if (idx === 0) {
      array.push(letter);
      return array;
    }
    
    array.push(array[idx - 1] + letter);
    return array;
  }, []);
}

console.log(spellOut("bee"));
// ["b", "be", "bee"]

console.log(spellOut("happy"));
// ["h", "ha", "hap", "happ", "happy"]

console.log(spellOut("eagerly"));
// ["e", "ea", "eag", "eage", "eager", "eagerl", "eagerly"]