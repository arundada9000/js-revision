// JavaScript Arrays — Methods, Manipulation, and Filtering

const myArray = [0, 1, 2, 3, 4, 5];
console.log("Original:", myArray.join(" "));
console.log("Slice (1,3):", myArray.slice(1, 3));
console.log("After slice:", myArray.join(" "));
console.log("Splice (1,3):", myArray.splice(1, 3).join(" "));
console.log("After splice:", myArray.join(" "));

const marvelHeroes = ["Thor", "Iron Man", "Spider Man"];
const dcHeroes = ["Batman", "Superman"];
const allHeroes = marvelHeroes.concat(dcHeroes);
console.log("All heroes (concat):", allHeroes);

const moreHeroes = [...marvelHeroes, ...dcHeroes];
console.log("All heroes (spread):", moreHeroes);

const nested = [1, 2, [1, 2, 3, [4, 5]], 6, 7, [8, 9]];
const flattened = nested.flat(Infinity);
console.log("Flattened:", flattened);

console.log("Array.from '12345':", Array.from("12345"));

const score1 = 100;
const score2 = 200;
const score3 = 300;
console.log("Array.of:", Array.of(score1, score2, score3));

const numbers = [10, 20, 30, 40, 50];
numbers.forEach((item, index) => {
  console.log(`numbers[${index}] = ${item}`);
});

const students = [
  { id: 1, name: "Arun", age: 22, city: "Butwal", marks: 85, enrolled: true },
  { id: 2, name: "Sita", age: 19, city: "Kathmandu", marks: 92, enrolled: true },
  { id: 3, name: "Ram", age: 24, city: "Pokhara", marks: 65, enrolled: false },
  { id: 4, name: "Hari", age: 21, city: "Butwal", marks: 48, enrolled: true },
  { id: 5, name: "Gita", age: 23, city: "Kathmandu", marks: 77, enrolled: false },
];

console.log("Butwal students:", students.filter((s) => s.city.toLowerCase() === "butwal"));
console.log("Top students:", students.filter((s) => s.marks >= 80).map((s) => s.name));
console.log("Not enrolled:", students.filter((s) => !s.enrolled));
console.log("Enrolled top:", students.filter((s) => s.marks >= 80 && s.enrolled));
console.log(
  "City filter:",
  students.filter(
    (s) =>
      (s.city.toLowerCase() === "kathmandu" || s.city.toLowerCase() === "butwal") && s.marks >= 75
  )
);
console.log(
  "Complex filter:",
  students.filter(
    (s) => (s.enrolled || s.marks >= 90) && s.city.toLowerCase() !== "pokhara"
  )
);
