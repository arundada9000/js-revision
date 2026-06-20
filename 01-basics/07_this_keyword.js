// JavaScript `this` Keyword - How it behaves in different contexts

// 1. Global context
console.log("Global this:", this);

// 2. Regular function (non-strict) - global object
function showThis() {
  console.log("Regular function this:", this);
}
showThis();

// 3. Object method - the object itself
const person = {
  name: "Arun",
  greet() {
    console.log("Method this:", this.name);
  },
};
person.greet();

// 4. Method with nested function - loses this
const person2 = {
  name: "Arun",
  greet() {
    function inner() {
      console.log("Inner function this:", this);
    }
    inner();
  },
};
person2.greet();

// 5. Arrow function in method - inherits this from parent scope
const person3 = {
  name: "Arun",
  greet() {
    const inner = () => {
      console.log("Arrow inner this:", this.name);
    };
    inner();
  },
};
person3.greet();

// 6. Constructor function
function User(name) {
  this.name = name;
  console.log("Constructor this:", this.name);
}
const user = new User("Arun");

// 7. Event handler - the element
// (browser only - uncomment to test in browser)
// document.querySelector("button").addEventListener("click", function () {
//   console.log("Event this:", this);
// });

// 8. Explicit binding with call, apply, bind
function introduce() {
  console.log(`${this.name} is ${this.age} years old`);
}
const arun = { name: "Arun", age: 22 };
introduce.call(arun);
introduce.apply(arun);
const bound = introduce.bind(arun);
bound();

