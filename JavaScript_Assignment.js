// 1. Smart Discount Calculator

let sureshMass = 40;     
let sureshHeight = 1.55; 
let rameshMass = 60;   
let rameshHeight = 1.30; 

let sureshBMI = sureshMass / (sureshHeight ** 2);
let rameshBMI = rameshMass / (rameshHeight ** 2);

let markHigherBMI = sureshBMI > rameshBMI;

console.log("Suresh BMI", sureshBMI);
console.log("Ramesh BMI", rameshBMI);
console.log(markHigherBMI);


// 2. Login Validation System

const correctUsername = "user";
const correctPassword = "user@123";
let inputUsername = "user1";
let inputPassword = "user1@123";

if (inputUsername === correctUsername && inputPassword === correctPassword) {
    console.log("Login successful!");
} 
else if (inputUsername !== correctUsername && inputPassword !== correctPassword) {
    console.log("Both incorrect");
} 
else if (inputUsername !== correctUsername) {
    console.log("Incorrect username");
} 
else {
    console.log("Incorrect password");
}


// 3. Number Analyzer Tool

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


// 4. Shopping Eligibility Checker

let isMember = true;
let cartValue = 1500;

if ((isMember && cartValue > 1000) || cartValue > 2000) {
    console.log("You are eligible for free delivery!");
} else {
    console.log("You are not eligible for free delivery.");
}


// 5. Grade Evaluation System

let marks = 82;

if (marks < 0 || marks > 100) {
    console.log("Invalid marks entered.");
} 
else if (marks >= 90) {
    console.log("Your grade is A.");
} 
else if (marks >= 75) {
    console.log("Your grade is B.");
} 
else if (marks >= 50) {
    console.log("Your grade is C.");
} 
else {
    console.log("Fail");
}