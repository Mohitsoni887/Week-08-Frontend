// Write a program that takes User Inputs and does Unit Conversion of different Length units:
// 1. Feet to Inch 3. Inch to Feet
// 2. Feet to Meter 4. Meter to Feet

function unitConversion(option, value) {
    switch (option) {
        case 1: return value * 12 + " Inches"; // Feet to Inches
        case 2: return value * 0.3048 + " Meters"; // Feet to Meters
        case 3: return value / 12 + " Feet"; // Inches to Feet
        case 4: return value * 3.28084 + " Feet"; // Meters to Feet
        default: return "Invalid Choice";
    }
}

console.log(unitConversion(1, 5)); // Output: 60 Inches
console.log(unitConversion(2, 10)); // Output: 3.048 Meters
console.log(unitConversion(3, 24)); // Output: 2 Feet
console.log(unitConversion(4, 1)); // Output: 3.28084 Feet
