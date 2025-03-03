// Take a number from user and check if the number is a Prime then show that its palindrome is also prime
// a. Write function check if number is Prime
// b. Write function to get the Palindrome.
// c. Check if the Palindrome number is also prime
function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function getPalindrome(num) {
    return parseInt(num.toString().split("").reverse().join(""));
}

const readline = require("readline-sync");
let number = parseInt(readline.question("Enter a number: "));

if (isPrime(number)) {
    let palindrome = getPalindrome(number);
    console.log(`${number} is a prime number.`);
    console.log(`Palindrome of ${number} is ${palindrome}.`);
    
    if (isPrime(palindrome)) {
        console.log(`Palindrome ${palindrome} is also a prime number.`);
    } else {
        console.log(`Palindrome ${palindrome} is not a prime number.`);
    }
} else {
    console.log(`${number} is not a prime number.`);
}
