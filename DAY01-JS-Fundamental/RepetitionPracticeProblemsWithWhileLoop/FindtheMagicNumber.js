// Find the Magic Number
// a. Ask the user to think of a number n between 1 to 100
// b. Then check with the user if the number is less then n/2 or greater
// c. Repeat till the Magic Number is reached..

const readline = require("readline-sync");
let low = 1, high = 100, mid;

console.log("Think of a number between 1 and 100.");

while (low <= high) {
    mid = Math.floor((low + high) / 2);
    let response = readline.question(`Is your number ${mid}? (yes, less, greater): `);

    if (response === "yes") {
        console.log(`Your Magic Number is: ${mid}`);
        break;
    } else if (response === "less") {
        high = mid - 1;
    } else if (response === "greater") {
        low = mid + 1;
    }
}
