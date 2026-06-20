// JavaScript Functions - Declaration, Expression, Arrow, Rest, Closure, IIFE

// Function declaration
function sum(...nums) {
  return nums.filter((num) => num > 0).reduce((acc, num) => acc + num, 0);
}
console.log("Sum of positives:", sum(1, 2, 3, -1, 1, -3));

function isEven(number) {
  return number % 2 === 0;
}
console.log("Is 501 even?:", isEven(501));
console.log("Is 42 even?:", isEven(42));

// Function expression
const reverseString = function (str) {
  return typeof str === "string" ? str.split("").reverse().join("") : "Please enter a string";
};
console.log("Reversed 'arun':", reverseString("arun"));

// Arrow function
const countVowels = (str) => {
  const vowels = "aeiou";
  let count = 0;
  for (const char of str) {
    if (vowels.includes(char.toLowerCase())) count++;
  }
  return count;
};
console.log("Vowels in 'AEIOUaa':", countVowels("AEIOUaa"));

// Higher-order - reduce to find max
function findMax(arr) {
  return arr.reduce((acc, item) => (item > acc ? item : acc), arr[0]);
}
console.log("Max of [1, 2, 13, 4, 5]:", findMax([1, 2, 13, 4, 5]));

function countOccurrences(arr, target) {
  return arr.reduce((acc, item) => (item === target ? acc + 1 : acc), 0);
}
console.log("Occurrences of 1:", countOccurrences([1, 2, 1, 3, 2, 1, 4, 1, 5], 1));

// Closure - counter
function createCounter() {
  let count = 0;
  return () => {
    count++;
    return count;
  };
}
const counter = createCounter();
console.log("Counter:", counter());
console.log("Counter:", counter());
console.log("Counter:", counter());

// IIFE
(function () {
  console.log("IIFE executed!");
})();

(() => {
  console.log("Arrow IIFE executed!");
})();

// Parameters: default values
function greet(name = "Guest") {
  console.log(`Hello, ${name}!`);
}
greet("Arun");
greet();

