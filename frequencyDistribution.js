// Frequency Distribution
// Create a function that returns the frequency distribution of an array. This 
// function should return an object, where the keys are the unique elements and 
// the values are the frequency in which those elements occur.

function getFrequencies(array) {
  return array.reduce((distributionObj, item) => {    
    if (item in distributionObj) {
      distributionObj[item] += 1;
    } else {
      distributionObj[item] = 1;
    }

    return distributionObj;
  }, {});
}

console.log(getFrequencies(["A", "B", "A", "A", "A"]));
// { A: 4, B: 1 }

console.log(getFrequencies([1, 2, 3, 3, 2]));
// { "1": 1, "2": 2, "3": 2 }

console.log(getFrequencies([true, false, true, false, false]));
// { true: 2, false: 3 }

console.log(getFrequencies([]));
// {}