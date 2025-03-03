// Write a function to check if the two numbers are Palindromes
function isPalindrome(num) {
    let original = num.toString();
    let reversed = original.split("").reverse().join("");
    return original === reversed;
}

const num1 = 121;
const num2 = 123;

console.log(`${num1} is ${isPalindrome(num1) ? "" : "not "}a palindrome.`);
console.log(`${num2} is ${isPalindrome(num2) ? "" : "not "}a palindrome.`);
