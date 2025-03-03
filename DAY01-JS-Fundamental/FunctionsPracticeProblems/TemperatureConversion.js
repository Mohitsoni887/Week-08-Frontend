// Help user find degF or degC based on their Conversion Selection. UseCase Statement and ensure that the inputs are within the Freezing Point (
// 0 °C / 32 °F ) and the Boiling Point of Water ( 100 °C / 212 °F )
// a. degF = (degC * 9/5) + 32
// b. degC = (degF – 32) * 5/9

const readline = require("readline-sync");

function convertTemperature(option, value) {
    switch (option) {
        case "CtoF":
            if (value >= 0 && value <= 100) {
                return (value * 9/5) + 32;
            } else {
                return "Invalid input: Temperature must be between 0°C and 100°C";
            }

        case "FtoC":
            if (value >= 32 && value <= 212) {
                return (value - 32) * 5/9;
            } else {
                return "Invalid input: Temperature must be between 32°F and 212°F";
            }

        default:
            return "Invalid Option! Use 'CtoF' or 'FtoC'";
    }
}

let option = readline.question("Enter conversion type (CtoF or FtoC): ");
let value = parseFloat(readline.question("Enter temperature: "));

console.log("Converted Temperature:", convertTemperature(option, value));
