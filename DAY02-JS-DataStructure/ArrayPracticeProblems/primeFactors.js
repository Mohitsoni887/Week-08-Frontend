// Extend the Prime Factorization Program to store all the Prime Factors of a number n into an array and finally display the output.
function primeFactors(n) {
    let factors = [];

    for (let i = 2; i <= n; i++) {
        while (n % i === 0) {
            factors.push(i);
            n /= i;
        }
    }

    console.log("Prime Factors:", factors);
}

// Example Usage
let num = 56; // Change this value to test with other numbers
primeFactors(num);
