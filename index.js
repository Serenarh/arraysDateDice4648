function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive.
}

const one = []; //array of ones rolled
const two = []; //array of twos rolled
const three = []; //array of threes rolled
const four = []; //array of fours rolled
const five = []; //array of fives rolled
const six = []; //array of sixes rolled
const ret = []; //returned for rollDice
let win; //returned for win
let lost; //returned for lost

function rollDice(numOfDice = 2, numOfSides = 6, numRolls = 10) {
  //Added default parameters here

  for (let i = 1; i <= numOfDice * numRolls; i++) {
    ret.push(getRandomIntInclusive(1, numOfSides)); //generate Random #s between 1 and # of sides on the die
  }
}
