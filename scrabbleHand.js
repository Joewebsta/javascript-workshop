// Scrabble Hand
// Given an array of scrabble tiles, create a function that outputs the maximum
// possible score a player can achieve by summing up the total number of points 
// for all the tiles in their hand. Each hand contains 7 scrabble tiles.

function getMaximumScore(tiles) {
  return tiles.reduce((score, tile) => score += tile.score, 0);
}

console.log(getMaximumScore([
  { tile: "N", score: 1 },
  { tile: "K", score: 5 },
  { tile: "Z", score: 10 },
  { tile: "X", score: 8 },
  { tile: "D", score: 2 },
  { tile: "A", score: 1 },
  { tile: "E", score: 1 }
])); 
// 28

console.log(getMaximumScore([
  { tile: "B", score: 2 },
  { tile: "V", score: 4 },
  { tile: "F", score: 4 },
  { tile: "U", score: 1 },
  { tile: "D", score: 2 },
  { tile: "O", score: 1 },
  { tile: "U", score: 1 }
]));
// 15