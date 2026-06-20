// JavaScript Scope & Closures - Lexical Scoping in Action

// ── Scope Levels ──
const globalVar = "I'm global";

function outer() {
  const outerVar = "I'm in outer";

  function inner() {
    const innerVar = "I'm in inner";
    console.log("Inner can access:", globalVar, outerVar, innerVar);
  }

  inner();
  // console.log(innerVar); // ReferenceError - not in scope
}
outer();

// ── Block Scope - let vs var ──
if (true) {
  let blockLet = "let is block-scoped";
  var blockVar = "var is function-scoped";
}
// console.log(blockLet); // ReferenceError
console.log("var escapes block:", blockVar);

// ── Closure - function remembers its lexical scope ──
function createGreeter(greeting) {
  return function (name) {
    console.log(`${greeting}, ${name}!`);
  };
}
const sayHello = createGreeter("Hello");
const sayNamaste = createGreeter("Namaste");
sayHello("Arun");
sayNamaste("Arun");

// ── Practical Closure: Counter ──
function createCounter() {
  let count = 0;
  return {
    increment() {
      count++;
      return count;
    },
    decrement() {
      count--;
      return count;
    },
    getCount() {
      return count;
    },
  };
}
const counter = createCounter();
console.log("Counter:", counter.increment());
console.log("Counter:", counter.increment());
console.log("Counter:", counter.decrement());

// ── Closure: Private variables ──
function createBankAccount(initialBalance) {
  let balance = initialBalance;
  return {
    deposit(amount) {
      balance += amount;
      console.log(`Deposited ${amount}. Balance: ${balance}`);
    },
    withdraw(amount) {
      if (amount <= balance) {
        balance -= amount;
        console.log(`Withdrew ${amount}. Balance: ${balance}`);
      } else {
        console.log("Insufficient funds");
      }
    },
    getBalance() {
      return balance;
    },
  };
}
const account = createBankAccount(1000);
account.deposit(500);
account.withdraw(200);
console.log("Final balance:", account.getBalance());
// console.log(account.balance); // undefined - private!

// ── Closure in loops (var vs let) ──
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log("var i:", i), 0);
}
for (let j = 0; j < 3; j++) {
  setTimeout(() => console.log("let j:", j), 0);
}

// ── Closure: Function factories ──
function multiply(factor) {
  return (number) => number * factor;
}
const double = multiply(2);
const triple = multiply(3);
console.log("Double 5:", double(5));
console.log("Triple 5:", triple(5));

