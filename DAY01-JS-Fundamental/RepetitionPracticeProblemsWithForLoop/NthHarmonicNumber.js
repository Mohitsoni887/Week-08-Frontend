// Write a program that takes a command-line argument n and prints the nth harmonic number. 

let n = parseInt(process.argv[2]); // Read command-line argument
let numerator = 0;
let denominator = 1;

// Compute harmonic number as a fraction
for (let i = 1; i <= n; i++) {
    numerator = numerator * i + denominator; // Adding fractions
    denominator *= i; // Common denominator
}

// Compute GCD manually to simplify the fraction
let a = numerator, b = denominator;
while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
}

// Simplify the fraction
numerator /= a;
denominator /= a;

console.log(`Harmonic Number H(${n}) = ${numerator}/${denominator}`);
