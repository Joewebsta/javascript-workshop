// Online Shopping
// Create a function that determines whether a shopping order is eligible for 
// free shipping. An order is eligible for free shipping if the total cost of 
// items purchased exceeds $50.00.

// Notes
// Look into how you can create an array based on the values of an object.

function checkForFreeShipping(orderItems) {
  let prices = Object.values(orderItems);
  let totalCost = prices.reduce((total, price) => total += price, 0);
  return totalCost > 50.00;
}

console.log(checkForFreeShipping({ "Shampoo": 5.99, "Rubber Ducks": 15.99 }));
// false

console.log(checkForFreeShipping({ "Flatscreen TV": 399.99 }));
// true

console.log(checkForFreeShipping({
  "Monopoly": 11.99,
  "Secret Hitler": 35.99,
  "Bananagrams": 13.99
}));
// true
