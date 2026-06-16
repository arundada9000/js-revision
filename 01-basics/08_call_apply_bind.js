// JavaScript call, apply, bind — Explicit `this` Binding

const arun = { name: "Arun", city: "Butwal" };
const sita = { name: "Sita", city: "Kathmandu" };

function introduce(greeting, punctuation) {
  console.log(`${greeting}, I'm ${this.name} from ${this.city}${punctuation}`);
}

// call — invoke immediately, args passed individually
introduce.call(arun, "Hi", "!");
introduce.call(sita, "Namaste", ".");

// apply — invoke immediately, args as array
introduce.apply(arun, ["Hello", "!!"]);
introduce.apply(sita, ["Hey", "!!"]);

// bind — returns new function with bound this
const arunIntro = introduce.bind(arun);
arunIntro("Welcome", "!");
arunIntro("Good morning", ".");

// bind — partial application
const greetArun = introduce.bind(arun, "Hola");
greetArun("?");
greetArun("!");

// Method borrowing
const cart1 = {
  items: [],
  add(item) {
    this.items.push(item);
    return this;
  },
};
const cart2 = { items: [] };
cart1.add.call(cart2, "book");
cart1.add.apply(cart2, ["pen"]);
console.log("Cart2 items (borrowed):", cart2.items);

// bind with setTimeout
const timer = {
  message: "Timer done!",
  start() {
    setTimeout(
      function () {
        console.log(this.message);
      }.bind(this),
      100
    );
  },
};
timer.start();

// bind with arrow (no bind needed)
const timer2 = {
  message: "Arrow timer done!",
  start() {
    setTimeout(() => {
      console.log(this.message);
    }, 100);
  },
};
timer2.start();
