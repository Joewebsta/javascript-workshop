// Transform into an Array with No Duplicates
// A set is a collection of unique items. A set can be formed from an array 
// from removing all duplicate items.

// Create a function that transforms an array into a set.

function makeSet(numbers) {
  return numbers.reduce((set, currentNum) => {  
    if (!set.includes(currentNum)) {
      set.push(currentNum);
    };

    return set;
  }, []);
}

console.log(makeSet([1, 3, 3, 5, 5, 5]));
// [1, 3, 5]

console.log(makeSet([1, 3, 3, 5, 5])); 
// [1, 3, 5]

console.log(makeSet([4, 4, 4, 4])); 
// [4]

console.log(makeSet([5, 7, 8, 9, 10, 15])); 
// [5, 7, 8, 9, 10, 15]