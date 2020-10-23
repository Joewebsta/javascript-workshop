// Spelling It Out
// Create a function which takes in a word and spells it out, by consecutively 
// adding letters until the full word is completed.

function spellOut(word) {
  let substring = '';

  let spelledOutArray = word.split('').reduce((array, letter) => {
    substring += letter;
    array.push(substring);
    return array;
  }, []);

  return spelledOutArray;
}


console.log(spellOut("bee"));
// ["b", "be", "bee"]

console.log(spellOut("happy"));
// ["h", "ha", "hap", "happ", "happy"]

console.log(spellOut("eagerly"));
// ["e", "ea", "eag", "eage", "eager", "eagerl", "eagerly"]