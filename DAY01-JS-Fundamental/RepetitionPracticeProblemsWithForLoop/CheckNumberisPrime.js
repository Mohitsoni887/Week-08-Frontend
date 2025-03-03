// Write a program that takes a input and determines if the number is a prime.
let num = 7; // Change this value to test different numbers
let isPrime = true;

if (num < 2) {
    isPrime = false;
} else {
    for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }
}

console.log(num, isPrime ? "is a Prime Number" : "is NOT a Prime Number");
