// JavaScript Higher-Order Functions — map, filter, reduce, and more

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// forEach — side effects
console.log("forEach:");
numbers.forEach((n) => console.log(n * 2));

// map — transform each element
const doubled = numbers.map((n) => n * 2);
console.log("Doubled:", doubled);

const labeled = numbers.map((n) => ({ value: n, isEven: n % 2 === 0 }));
console.log("Labeled:", labeled);

// filter — keep elements that pass test
const even = numbers.filter((n) => n % 2 === 0);
console.log("Even:", even);

const big = numbers.filter((n) => n > 5);
console.log("Big > 5:", big);

// reduce — accumulate values
const sum = numbers.reduce((acc, n) => acc + n, 0);
console.log("Sum:", sum);

const product = numbers.reduce((acc, n) => acc * n, 1);
console.log("Product 1-5:", [1, 2, 3, 4, 5].reduce((a, b) => a * b, 1));

const max = numbers.reduce((acc, n) => (n > acc ? n : acc), numbers[0]);
console.log("Max:", max);

const grouped = numbers.reduce(
  (acc, n) => {
    acc[n % 2 === 0 ? "even" : "odd"].push(n);
    return acc;
  },
  { even: [], odd: [] }
);
console.log("Grouped:", grouped);

// some — at least one passes
console.log("Has even:", numbers.some((n) => n % 2 === 0));
console.log("Has > 20:", numbers.some((n) => n > 20));

// every — all pass
console.log("All positive:", numbers.every((n) => n > 0));
console.log("All < 5:", numbers.every((n) => n < 5));

// find — first match
console.log("First > 5:", numbers.find((n) => n > 5));
console.log("First even:", numbers.find((n) => n % 2 === 0));

// findIndex — index of first match
console.log("Index of first > 5:", numbers.findIndex((n) => n > 5));

// includes — check value exists
console.log("Includes 5:", numbers.includes(5));
console.log("Includes 99:", numbers.includes(99));

// sort — with comparator
const unsorted = [3, 1, 4, 1, 5, 9, 2, 6];
console.log("Ascending:", [...unsorted].sort((a, b) => a - b));
console.log("Descending:", [...unsorted].sort((a, b) => b - a));

// Chaining
const result = numbers
  .filter((n) => n % 2 === 0)
  .map((n) => n * 10)
  .reduce((a, b) => a + b, 0);
console.log("Chained (even * 10 summed):", result);

// Real-world: students
const students = [
  { name: "Arun", marks: 85, grade: "A" },
  { name: "Sita", marks: 65, grade: "B" },
  { name: "Ram", marks: 45, grade: "C" },
  { name: "Hari", marks: 92, grade: "A" },
];
console.log(
  "Names of grade A:",
  students.filter((s) => s.grade === "A").map((s) => s.name)
);
console.log(
  "Average marks:",
  students.reduce((acc, s) => acc + s.marks, 0) / students.length
);

// Practical: group by property
const groupedByGrade = students.reduce((acc, s) => {
  (acc[s.grade] = acc[s.grade] || []).push(s.name);
  return acc;
}, {});
console.log("Grouped by grade:", groupedByGrade);
