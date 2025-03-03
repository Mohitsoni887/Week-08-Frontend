// Read a Number 1, 10, 100, 1000, etc and display unit, ten, hundred,...
function numberToUnit(num) {
    switch (num) {
        case 1: return "Unit";
        case 10: return "Ten";
        case 100: return "Hundred";
        case 1000: return "Thousand";
        case 10000: return "Ten Thousand";
        case 100000: return "Lakh";
        default: return "Invalid Input";
    }
}

console.log(numberToUnit(100)); // Output: Hundred
