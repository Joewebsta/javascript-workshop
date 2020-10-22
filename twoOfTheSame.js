// Two of the Same
// Create a function that checks to see if two object arguments are equal to one
// another. Return true if the objects are equal, otherwise, return false.

function checkIfDataIsSame(a, b) {
  let aProps = Object.getOwnPropertyNames(a);
  let bProps = Object.getOwnPropertyNames(b);

  if (aProps.length !== bProps.length) return false;

  for (prop of aProps) {
    if (a[prop] !== b[prop]) return false;
  }

  return true;
}


console.log(checkIfDataIsSame({
  name: "Benny",
  phone: "3325558745",
  email: "benny@edabit.com"
}, {
  name: "Jason",
  phone: "9853759720",
  email: "jason@edabit.com"
}))
// false

console.log(checkIfDataIsSame({
  name: "Jason",
  phone: "9853759720",
  email: "jason@edabit.com"
}, {
  name: "Jason",
  phone: "9853759720",
  email: "jason@edabit.com"
}))
// true