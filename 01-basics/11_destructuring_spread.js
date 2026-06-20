// JavaScript Destructuring & Spread - Unpacking Objects and Arrays

const course = {
  name: "JS in English",
  price: 999,
  courseInstructor: "Arun",
};
const { courseInstructor: instructor } = course;
console.log("Instructor (destructured):", instructor);

const { name: courseName, price } = course;
console.log(`Course: ${courseName}, Price: $${price}`);

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const merged = { ...obj1, ...obj2 };
console.log("Spread merged:", merged);

const defaults = { theme: "dark", lang: "en", debug: false };
const userPrefs = { lang: "np" };
const config = { ...defaults, ...userPrefs };
console.log("Config with override:", config);

function sumAll(...nums) {
  return nums.reduce((acc, n) => acc + n, 0);
}
console.log("Sum all (rest):", sumAll(1, 2, 3, 4, 5));

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2];
console.log("Combined arrays:", combined);

const original = [1, 2, 3];
const copy = [...original];
copy.push(4);
console.log("Original:", original);
console.log("Copy:", copy);

const user = {
  id: 1,
  profile: {
    displayName: "Arun Neupane",
    avatar: "https://example.com/avatar.png",
  },
  roles: ["admin", "editor"],
};
const {
  profile: { displayName },
  roles: [primaryRole],
} = user;
console.log("Display name:", displayName);
console.log("Primary role:", primaryRole);

