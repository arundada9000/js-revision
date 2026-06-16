// JavaScript Classes — ES6 Class Syntax

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  introduce() {
    return `Hi, I'm ${this.name}, ${this.age} years old`;
  }

  isAdult() {
    return this.age >= 18;
  }

  static createAnonymous() {
    return new Person("Anonymous", 0);
  }
}

const arun = new Person("Arun", 22);
console.log("Person:", arun.introduce());
console.log("Is adult:", arun.isAdult());

const anon = Person.createAnonymous();
console.log("Static method:", anon.introduce());

// Inheritance with extends
class Student extends Person {
  constructor(name, age, grade) {
    super(name, age);
    this.grade = grade;
  }

  study() {
    return `${this.name} is studying for grade ${this.grade}`;
  }

  introduce() {
    return `${super.introduce()} — Grade: ${this.grade}`;
  }
}

const student = new Student("Arun", 22, "A");
console.log("Student:", student.introduce());
console.log("Study:", student.study());
console.log("Is adult:", student.isAdult());

// Private fields (ES2022)
class BankAccount {
  #balance = 0;

  constructor(owner, initialBalance) {
    this.owner = owner;
    this.#balance = initialBalance;
  }

  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
      console.log(`Deposited $${amount}. Balance: $${this.#balance}`);
    }
  }

  withdraw(amount) {
    if (amount > 0 && amount <= this.#balance) {
      this.#balance -= amount;
      console.log(`Withdrew $${amount}. Balance: $${this.#balance}`);
    } else {
      console.log("Insufficient funds");
    }
  }

  get balance() {
    return `$${this.#balance}`;
  }
}

const acc = new BankAccount("Arun", 1000);
acc.deposit(500);
acc.withdraw(200);
console.log("Balance:", acc.balance);
// console.log(acc.#balance); // SyntaxError — private

// Getters and Setters
class User {
  constructor(first, last) {
    this.first = first;
    this.last = last;
  }

  get fullName() {
    return `${this.first} ${this.last}`;
  }

  set fullName(value) {
    [this.first, this.last] = value.split(" ");
  }
}

const user = new User("Arun", "Neupane");
console.log("Full name:", user.fullName);
user.fullName = "Sita Sharma";
console.log("Updated:", user.fullName);
