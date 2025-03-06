// Write a Program to generate a birth month of 50 individualsbetween the year 92 & 93. Find all the individuals having birthdays in the same month. Store it to finally print.
function generateBirthMonths() {
    let birthMonthMap = new Map();

    // Initialize map with months 1-12
    for (let i = 1; i <= 12; i++) {
        birthMonthMap.set(i, []);
    }

    for (let i = 1; i <= 50; i++) {
        let birthMonth = Math.floor(Math.random() * 12) + 1; // Random month between 1 and 12
        birthMonthMap.get(birthMonth).push(`Person${i}`);
    }

    console.log("Individuals grouped by Birth Month:");
    for (let [month, individuals] of birthMonthMap.entries()) {
        console.log(`Month ${month}: ${individuals.length > 0 ? individuals.join(", ") : "No one"}`);
    }
}

generateBirthMonths();
