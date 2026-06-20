// JavaScript Error Handling - try, catch, finally, throw

// Basic try/catch
try {
  const result = 10 / 0;
  console.log("Result:", result);
  // This will cause an error
  undefinedVar.property;
} catch (error) {
  console.log("Caught error:", error.message);
} finally {
  console.log("Finally always runs");
}

// Throwing custom errors
function divide(a, b) {
  if (b === 0) {
    throw new Error("Division by zero is not allowed");
  }
  if (typeof a !== "number" || typeof b !== "number") {
    throw new TypeError("Both arguments must be numbers");
  }
  return a / b;
}

try {
  console.log("10 / 2 =", divide(10, 2));
  console.log("10 / 0 =", divide(10, 0));
} catch (error) {
  console.log(`${error.name}: ${error.message}`);
}

try {
  divide("ten", 2);
} catch (error) {
  console.log(`${error.name}: ${error.message}`);
}

// Custom error types
class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}

function validateAge(age) {
  if (age < 0) throw new ValidationError("Age cannot be negative");
  if (age > 150) throw new ValidationError("Age seems unrealistic");
  if (typeof age !== "number") throw new TypeError("Age must be a number");
  return `Valid age: ${age}`;
}

try {
  console.log(validateAge(22));
  console.log(validateAge(-5));
} catch (error) {
  if (error instanceof ValidationError) {
    console.log("Validation:", error.message);
  } else if (error instanceof TypeError) {
    console.log("Type:", error.message);
  } else {
    console.log("Unexpected:", error.message);
  }
}

// try/catch in async functions
async function fetchUser(id) {
  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return await res.json();
  } catch (error) {
    console.log(`Failed to fetch user ${id}:`, error.message);
  }
}
fetchUser(1);
fetchUser(999);

// finally for cleanup
function riskyOperation() {
  try {
    console.log("Starting risky operation");
    // Simulate random failure
    if (Math.random() > 0.5) throw new Error("Random failure");
    console.log("Operation succeeded");
  } catch (error) {
    console.log("Caught:", error.message);
  } finally {
    console.log("Cleanup completed");
  }
}
riskyOperation();

