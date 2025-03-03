// Extend the Flip Coin problem till either Heads or Tails wins 11 times.
let heads = 0, tails = 0;

while (heads < 11 && tails < 11) {
    let flip = Math.random(); // Random value between 0 and 1
    if (flip < 0.5) {
        heads++;
    } else {
        tails++;
    }
}

console.log(`Heads: ${heads}, Tails: ${tails}`);
console.log(`${heads === 11 ? "Heads" : "Tails"} wins!`);
