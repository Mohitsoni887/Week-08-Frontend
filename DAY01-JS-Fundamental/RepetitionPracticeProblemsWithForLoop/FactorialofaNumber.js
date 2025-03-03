// Write a program that computes a factorial of a number taken as input 5 Factorial – 5! = 1 * 2 * 3 * 4 * 5
let n = 5; // Change this value to test different numbers
let fact = 1;

for (let i = 2; i <= n; i++) {
    fact *= i;
}

console.log(`Factorial of ${n} is:`, fact);
