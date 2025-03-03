// Write a program that takes a command-line argument n and prints a table of thepowers of 2 that are less than or equal to 2^n.

let n = 5; // Change this value for different results

for (let i = 0; i <= n; i++) {
    console.log(`2^${i} = ${Math.pow(2, i)}`);
}
