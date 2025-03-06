// Take a range from 0 – 100, find the digits that are repeated twice like 33, 77, etc and store them in an array
function findRepeatedDigits() {
    let repeatedNumbers = [];

    for (let i = 10; i < 100; i++) {
        let first = Math.floor(i / 10);
        let second = i % 10;

        if (first === second) {
            repeatedNumbers.push(i);
        }
    }

    console.log("Repeated digit numbers:", repeatedNumbers);
}

// Example Usage
findRepeatedDigits();
