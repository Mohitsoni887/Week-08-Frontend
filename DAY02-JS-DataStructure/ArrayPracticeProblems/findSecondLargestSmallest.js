// Write a program in the following steps
// a. Generates 10 Random 3 Digit number.
// b. Store this random numbers into a array.
// c. Then find the 2nd largest and the 2nd smallest element without sorting the array.
function findSecondLargestSmallest(arr) {
    let largest = -Infinity, secondLargest = -Infinity;
    let smallest = Infinity, secondSmallest = Infinity;

    for (let num of arr) {
        if (num > largest) {
            secondLargest = largest;
            largest = num;
        } else if (num > secondLargest && num !== largest) {
            secondLargest = num;
        }

        if (num < smallest) {
            secondSmallest = smallest;
            smallest = num;
        } else if (num < secondSmallest && num !== smallest) {
            secondSmallest = num;
        }
    }

    console.log("Generated Array:", arr);
    console.log("2nd Smallest:", secondSmallest);
    console.log("2nd Largest:", secondLargest);
}

// Generating 10 random 3-digit numbers
let numbers = Array.from({ length: 10 }, () => Math.floor(Math.random() * 900) + 100);
findSecondLargestSmallest(numbers);
