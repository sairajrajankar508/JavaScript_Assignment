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
