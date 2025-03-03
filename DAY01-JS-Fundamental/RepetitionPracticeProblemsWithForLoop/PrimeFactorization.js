// Write a program to compute Factors of a number N using prime factorization method.
// Logic -> Traverse till i*i <= N instead of i <= N for efficiency.
// O/P -> Print the prime factors of number N.

let n = 56; // Change this value for different numbers

// Divide out the factor of 2
while (n % 2 === 0) {
    console.log(2);
    n /= 2;
}

// Check for odd factors
for (let i = 3; i * i <= n; i += 2) {
    while (n % i === 0) {
        console.log(i);
        n /= i;
    }
}

// If n is still a prime number greater than 2
if (n > 2) {
    console.log(n);
}
