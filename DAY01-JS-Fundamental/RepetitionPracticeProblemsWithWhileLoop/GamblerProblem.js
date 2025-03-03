// Write a Program where a gambler starts with Rs 100 and places Re 1 bet until he/she goes broke i.e. no more money to gamble or reaches the
// goal of Rs 200. Keeps track of number of times won and number of bets made.
let money = 100, bets = 0, wins = 0;

while (money > 0 && money < 200) {
    bets++;
    let betResult = Math.random(); // 50% chance to win or lose
    if (betResult < 0.5) {
        money--; // Lose 1 Rs
    } else {
        money++; // Win 1 Rs
        wins++;
    }
}

console.log(`Final Money: Rs ${money}`);
console.log(`Total Bets: ${bets}`);
console.log(`Total Wins: ${wins}`);
