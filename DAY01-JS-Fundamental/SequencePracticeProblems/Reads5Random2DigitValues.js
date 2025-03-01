//Sum and average of 5 random 2-digit numbers
let numbers = [];
let sum = 0;
for (let i = 0; i < 5; i++) {
    let num = Math.floor(Math.random() * 90) + 10; // 2-digit number (10-99)
    numbers.push(num);
    sum += num;
}
let average = sum / numbers.length;
console.log("Random Numbers:", numbers);
console.log("Sum:", sum);
console.log("Average:", average);