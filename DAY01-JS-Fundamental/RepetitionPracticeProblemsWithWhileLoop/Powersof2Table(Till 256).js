// Write a program that takes a command-line argument n and prints a table of the powers of 2 that are less than or equal to 2^n till 256 is reached..
let n = parseInt(process.argv[2]); // Read command-line argument
let i = 0;
let power = 1; // 2^0 = 1

while (i <= n && power <= 256) {
    console.log(`2^${i} = ${power}`);
    power *= 2; // Next power of 2
    i++;
}
