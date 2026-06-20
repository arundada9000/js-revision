// JavaScript Data Types - Primitives, Reference, typeof, Coercion

// ── Primitive Types ──
const myString = "Hello Arun";
const myNumber = 42;
const myBoolean = true;
const myNull = null;
let myUndefined;
const mySymbol = Symbol("id");
const myBigInt = 9007199254740991n;

console.log("String:", myString, typeof myString);
console.log("Number:", myNumber, typeof myNumber);
console.log("Boolean:", myBoolean, typeof myBoolean);
console.log("Null:", myNull, typeof myNull);
console.log("Undefined:", myUndefined, typeof myUndefined);
console.log("Symbol:", mySymbol, typeof mySymbol);
console.log("BigInt:", myBigInt, typeof myBigInt);

// ── Reference Types ──
const myObject = { name: "Arun" };
const myArray = [1, 2, 3];
const myFunction = function () {
  return "hi";
};

console.log("Object:", myObject, typeof myObject);
console.log("Array:", myArray, typeof myArray);
console.log("Function:", myFunction, typeof myFunction);

// ── Primitive vs Reference - copy behavior ──
let a = 10;
let b = a;
b = 20;
console.log("Primitive copy - a:", a, "b:", b);

let objA = { value: 10 };
let objB = objA;
objB.value = 20;
console.log("Reference copy - objA.value:", objA.value, "objB.value:", objB.value);

// ── Type Coercion ──
console.log("String + Number:", "5" + 3);
console.log("String * Number:", "5" * 3);
console.log("String - Number:", "10" - 4);
console.log("Boolean + Number:", true + 1);
console.log("Loose equality:", 5 == "5");
console.log("Strict equality:", 5 === "5");

// ── Truthy & Falsy ──
const falsyValues = [false, 0, "", null, undefined, NaN];
falsyValues.forEach((val) => console.log(`Falsy: ${String(val).padEnd(10)} → Boolean:`, Boolean(val)));

const truthyValues = [true, 1, "hello", [], {}, Infinity];
truthyValues.forEach((val) => console.log(`Truthy: ${String(val).padEnd(10)} → Boolean:`, Boolean(val)));

if ("Arun") console.log("'Arun' is truthy");
if (0) console.log("This won't run");

