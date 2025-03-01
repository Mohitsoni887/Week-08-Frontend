//Find the minimum and maximum of 5 random 3-digit numbers
let threeDigitNumbers = [];
for (let i = 0; i < 5; i++) {
    threeDigitNumbers.push(Math.floor(Math.random() * 900) + 100); // 3-digit number (100-999)
}
let minNumber = Math.min(...threeDigitNumbers);
let maxNumber = Math.max(...threeDigitNumbers);
console.log("Random 3-Digit Numbers:", threeDigitNumbers);
console.log("Minimum:", minNumber);
console.log("Maximum:", maxNumber);