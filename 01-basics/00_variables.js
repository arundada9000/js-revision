// JavaScript Variables - var, let, const, hoisting, TDZ

// const - cannot be reassigned
const name = "Arun Neupane";
console.log("Name:", name);

// let - block-scoped, can be reassigned
let age = 22;
console.log("Age:", age);
age = 23;
console.log("Age after update:", age);

// var - function-scoped, hoisted, can be redeclared
var city = "Butwal";
console.log("City:", city);
var city = "Rupandehi";
console.log("City after redeclare:", city);

// Block scoping - let vs var
if (true) {
  let blockLet = "I'm block-scoped";
  var blockVar = "I'm function-scoped";
  console.log("Inside block:", blockLet);
}
// console.log(blockLet); // ReferenceError
console.log("Outside block (var):", blockVar);

// Temporal Dead Zone (TDZ)
// console.log(tdzVar); // ReferenceError - TDZ
let tdzVar = "Now I'm initialized";
console.log("After TDZ:", tdzVar);

// Hoisting with var
console.log("Hoisted var:", hoistedVar); // undefined (not an error)
var hoistedVar = "I was hoisted";

// const requires initialization
const PI = 3.14159;
console.log("PI:", PI);

// Object mutation with const
const user = { name: "Arun" };
user.name = "Arun Neupane";
user.age = 22;
console.log("Mutable const object:", user);
// user = {}; // TypeError - can't reassign

