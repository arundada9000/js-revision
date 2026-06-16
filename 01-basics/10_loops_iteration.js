// JavaScript Loops & Iteration — for...of, for...in, Map, forEach

const numbers = [10, 20, 30, 40, 50];
for (const num of numbers) {
  console.log("for...of:", num + 1);
}

const map = new Map();
map.set("name", "Arun");
map.set("age", 22);
map.set("address", "Butwal");

for (const [key, value] of map) {
  console.log(`Map entry — ${key}: ${value}`);
}

const person = {
  name: "Arun",
  age: 22,
  place: "Butwal",
};
for (const key in person) {
  console.log(`for...in — ${key}: ${person[key]}`);
}

numbers.forEach((item, index) => {
  console.log(`forEach — index ${index}: ${item}`);
});
