// JavaScript Prototypes — Inheritance Chain

// Every object has a prototype
const obj = { name: "Arun" };
console.log("obj.__proto__:", Object.getPrototypeOf(obj));
console.log("obj.toString():", obj.toString());

// Constructor functions and prototype
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.introduce = function () {
  return `Hi, I'm ${this.name}, ${this.age} years old`;
};

Person.prototype.isAdult = function () {
  return this.age >= 18;
};

const arun = new Person("Arun", 22);
const sita = new Person("Sita", 17);

console.log("Arun:", arun.introduce());
console.log("Arun is adult:", arun.isAdult());
console.log("Sita is adult:", sita.isAdult());

console.log("arun.__proto__ === Person.prototype:", Object.getPrototypeOf(arun) === Person.prototype);

// Prototype chain
console.log("arun.toString():", arun.toString());

// Adding methods to built-in prototypes
Array.prototype.first = function () {
  return this[0];
};
Array.prototype.last = function () {
  return this[this.length - 1];
};

const arr = [10, 20, 30];
console.log("Array first:", arr.first());
console.log("Array last:", arr.last());

// hasOwnProperty vs inherited
console.log("arun has own 'name':", arun.hasOwnProperty("name"));
console.log("arun has own 'introduce':", arun.hasOwnProperty("introduce"));
console.log("'introduce' in arun:", "introduce" in arun);

// instanceof
console.log("arun instanceof Person:", arun instanceof Person);
console.log("arun instanceof Object:", arun instanceof Object);

// Inheritance chain
function Student(name, age, grade) {
  Person.call(this, name, age);
  this.grade = grade;
}
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.study = function () {
  return `${this.name} is studying for grade ${this.grade}`;
};

const student = new Student("Arun", 22, "A");
console.log("Student:", student.introduce());
console.log("Student:", student.study());
console.log("Student instanceof Student:", student instanceof Student);
console.log("Student instanceof Person:", student instanceof Person);
console.log("Student instanceof Object:", student instanceof Object);
