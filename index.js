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
let win = "You rolled 8 of a single number! You WIN!"; //returned for win
let lost = "You LOST! No single number was rolled 8 times."; //returned for lost

function rollDice(numOfDice = 2, numOfSides = 6, numRolls = 10) {
  //Added default parameters here

  for (
    let i = 1;
    i <= numOfDice * numRolls;
    i++ //i's limit is now number of dice times 10 rolls
  ) {
    ret.push(getRandomIntInclusive(1, numOfSides)); //generate Random #s between 1 and # of sides on the die
  }

  for (let i = 0; i < ret.length; i++) {
    if (ret[i] === 1) {
      one.push(ret[i]); //push a 1 into one array
    } else if (ret[i] === 2) {
      two.push(ret[i]); //push a 2 into two array
    } else if (ret[i] === 3) {
      three.push(ret[i]); //push a 3 into three array
    } else if (ret[i] === 4) {
      four.push(ret[i]); //push a 4 into four array
    } else if (ret[i] === 5) {
      five.push(ret[i]); //push a 5 into five array
    } else if (ret[i] === 6) {
      six.push(ret[i]); //push a 6 into six array
    }
  }

  if (
    //check for win qualifications
    one.length > 7 ||
    two.length > 7 ||
    three.length > 7 ||
    four.length > 7 ||
    five.length > 7 ||
    six.length > 7
  ) {
    return ret, win; //Winner!
  } else {
    return ret, lost; //Loser!
  }
}

console.log(rollDice(), one, two, three, four, five, six); //print win/loss + arrays for each number
