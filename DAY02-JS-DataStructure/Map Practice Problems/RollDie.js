// Write a program in the following steps
// a. Roll a die and find the number between 1 to 6
// b. Repeat the Die roll and find the result each time
// c. Store the result in a dictionary
// d. Repeat till any one of the number has reached 10 times
// e. Find the number that reached maximum times and the one that was for
// minimum times
function rollDie() {
    return Math.floor(Math.random() * 6) + 1; // Generates a number between 1 and 6
}

function diceRollSimulation() {
    let diceMap = new Map();
    let maxRoll = 10;
    
    // Initialize map with keys 1-6 and values 0
    for (let i = 1; i <= 6; i++) {
        diceMap.set(i, 0);
    }

    let reachedMax = false;

    while (!reachedMax) {
        let roll = rollDie();
        diceMap.set(roll, diceMap.get(roll) + 1);

        // Check if any number reached maxRoll times
        if (diceMap.get(roll) === maxRoll) {
            reachedMax = true;
        }
    }

    console.log("Final Dice Roll Counts:", Object.fromEntries(diceMap));

    let maxNumber = [...diceMap.entries()].reduce((a, b) => (a[1] > b[1] ? a : b));
    let minNumber = [...diceMap.entries()].reduce((a, b) => (a[1] < b[1] ? a : b));

    console.log("Number that appeared maximum times:", maxNumber[0], "(", maxNumber[1], "times)");
    console.log("Number that appeared minimum times:", minNumber[0], "(", minNumber[1], "times)");
}

diceRollSimulation();
