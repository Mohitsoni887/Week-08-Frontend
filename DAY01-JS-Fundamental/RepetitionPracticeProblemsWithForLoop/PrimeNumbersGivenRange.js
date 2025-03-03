// Extend the program to take a range of number as input and output the Prime Numbers in that range.
let start = 10, end = 50; // Change range as needed

for (let num = start; num <= end; num++) {
    let isPrime = true;
    if (num < 2) isPrime = false;
    
    for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }
    
    if (isPrime) console.log(num);
}
