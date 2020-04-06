const soBored = ["cooking", "reading", "walking", "sewing", "sleeping"];

const spliced = soBored.splice(2, 0, "bicycling");

console.log(spliced); //what was removed?
console.log(soBored);

const spliced2 = soBored.splice(2, 1, "yoga");
console.log(spliced2); //what was removed?
console.log(soBored);
