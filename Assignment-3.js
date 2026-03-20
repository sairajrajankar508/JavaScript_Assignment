let number = -4;

let type;
if (number > 0) {
    type = "positive";
} else if (number < 0) {
    type = "negative";
} else {
    type = "zero";
}

let parity;
if (number % 2 === 0) {
    parity = "even";
} else {
    parity = "odd";
}

console.log(`The number ${number} is ${type} and ${parity}.`);