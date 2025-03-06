// Extend the above program to sort the array and then find the 2nd largest and the 2nd smallest element.

function findSecondLargestSmallestSorted(arr) {
    arr.sort((a, b) => a - b);
    console.log("Sorted Array:", arr);
    console.log("2nd Smallest:", arr[1]);
    console.log("2nd Largest:", arr[arr.length - 2]);
}

// Generating 10 random 3-digit numbers
let sortedNumbers = Array.from({ length: 10 }, () => Math.floor(Math.random() * 900) + 100);
findSecondLargestSmallestSorted(sortedNumbers);
