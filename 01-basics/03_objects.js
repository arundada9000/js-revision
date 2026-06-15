// JavaScript Objects — Creation, Properties, Methods

const person = {
  name: "Arun Neupane",
  birthYear: 2004,
  age() {
    return new Date().getFullYear() - this.birthYear;
  },
  status: "unmarried",
};
console.log("Person age:", person.age());

const user = {
  name: "Arun Neupane",
  age: 22,
  city: "Butwal",
};
console.log("User name:", user.name);
console.log("User age:", user["age"]);

user.city = "Rupandehi";
console.log("User city:", user["city"]);

user.country = "Nepal";
user.age = 23;
console.log("Updated user:", user);

const student = {
  name: "Arun",
  age: 22,
  marks: 85,
};
console.log("Student name:", student.name);
console.log("Student marks:", student["marks"]);
student.age = 23;
console.log("Student after update:", student);

const car = {
  brand: "Toyota",
  model: "Corolla",
  year: 2020,
};
console.log("Car brand:", car.brand);
console.log("Car model:", car.model);
car.year = 2025;
car.getInfo = function () {
  return `${this.brand} ${this.model} (${this.year})`;
};
console.log("Car info:", car.getInfo());

const bankAccount = {
  name: "Arun",
  balance: 1000,
  deposit(amount) {
    this.balance += amount;
  },
  withdraw(amount) {
    if (this.balance >= amount) this.balance -= amount;
    else console.log("Insufficient balance:", this.balance);
  },
  getBalance() {
    return `Current Balance: ${this.balance}`;
  },
};
bankAccount.deposit(100);
console.log(bankAccount.getBalance());
bankAccount.withdraw(100);
console.log(bankAccount.getBalance());

const cart1 = {
  items: [],
  addItem(price) {
    this.items.push(price);
    return this.items;
  },
  removeItem(price) {
    if (this.items.includes(price)) {
      this.items = this.items.filter((item) => item !== price);
      return true;
    }
    return false;
  },
  getTotal() {
    return this.items.reduce((acc, item) => acc + item, 0);
  },
  getItems() {
    return [...this.items];
  },
};
cart1.addItem(10);
cart1.addItem(20);
cart1.addItem(30);
console.log("Cart1 items:", cart1.items);
console.log("Cart1 total:", cart1.getTotal());
console.log("Cart1 items copy:", cart1.getItems());
const deleted = cart1.removeItem(20);
if (deleted) {
  console.log("Item deleted successfully");
  console.log("Cart1 after delete:", cart1.getItems());
} else {
  console.log("Item not found");
}

const cart2 = {
  items: [],
  addItem(name, price) {
    this.items.push({ name, price, id: Date.now() });
    return this.items;
  },
  removeItem(id) {
    const before = this.items.length;
    this.items = this.items.filter((item) => item.id !== id);
    return this.items.length < before;
  },
  getTotal() {
    return this.items.reduce((acc, item) => acc + item.price, 0);
  },
  getItems() {
    return [...this.items];
  },
};
cart2.addItem("English", 1000);
cart2.addItem("Japanese", 1500);
console.log("Cart2 remove result:", cart2.removeItem(999));
console.log("Cart2 items:", cart2.getItems());
console.log("Cart2 total:", cart2.getTotal());

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "c", 4: "d" };
const obj3 = { 5: "e", 6: "f" };
const objJoined = { ...obj2, ...obj1, ...obj3 };
console.log("Merged objects:", objJoined);

const course = {
  name: "JS in English",
  price: 999,
  courseInstructor: "Arun",
};
const { courseInstructor: instructor } = course;
console.log("Instructor:", instructor);
