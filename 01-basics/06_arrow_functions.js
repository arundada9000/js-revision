// JavaScript Arrow Functions — Syntax, Behavior, and When to Use

// Basic arrow syntax
const greet = (name) => `Hello, ${name}!`;
console.log("Arrow greet:", greet("Arun"));

// Single param — parens optional
const square = (x) => x * x;
console.log("Square 5:", square(5));

// No params
const random = () => Math.random();
console.log("Random:", random());

// Multi-line body needs braces + return
const fullName = (first, last) => {
  const result = `${first} ${last}`;
  return result;
};
console.log("Full name:", fullName("Arun", "Neupane"));

// Returning objects — wrap in parens
const createUser = (name, age) => ({ name, age, active: true });
console.log("Arrow object return:", createUser("Arun", 22));

// Arrow functions do NOT have their own `this`
const person = {
  name: "Arun",
  regularFunc: function () {
    console.log("Regular:", this.name);
  },
  arrowFunc: () => {
    console.log("Arrow:", this.name);
  },
};
person.regularFunc();
person.arrowFunc();

// Arrow functions and `arguments`
function regularSum() {
  console.log("Regular arguments:", Array.from(arguments).reduce((a, b) => a + b, 0));
}
regularSum(1, 2, 3);

const arrowSum = (...args) => {
  console.log("Arrow rest params:", args.reduce((a, b) => a + b, 0));
};
arrowSum(1, 2, 3);

// Arrow functions cannot be used as constructors
const Foo = (name) => {
  this.name = name;
};
try {
  const f = new Foo("Arun");
} catch (e) {
  console.log("Arrow constructor error:", e.message);
}

// Arrow functions for short callbacks
const numbers = [1, 2, 3, 4, 5];
console.log("Doubled:", numbers.map((n) => n * 2));
console.log("Even:", numbers.filter((n) => n % 2 === 0));
console.log("Sum:", numbers.reduce((a, b) => a + b, 0));
