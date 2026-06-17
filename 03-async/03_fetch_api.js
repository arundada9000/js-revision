// JavaScript Fetch API — Modern HTTP Requests

// Fetch with .then/.catch
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log("All users:", data);
  })
  .catch((error) => console.log("Error:", error));

// Fetch with async/await
async function getAllUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    console.log("Users (async):", data);
  } catch (error) {
    console.log("Error:", error);
  }
}
getAllUsers();

// Fetch single user
async function getUser(id) {
  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const user = await res.json();
    console.log(`User ${id}:`, user.name, user.email);
  } catch (error) {
    console.log("Error fetching user:", error);
  }
}
getUser(1);
getUser(2);

// Multiple fetches with Promise.all
async function getMultipleUsers() {
  try {
    const [res1, res2] = await Promise.all([
      fetch("https://jsonplaceholder.typicode.com/users/1"),
      fetch("https://jsonplaceholder.typicode.com/users/2"),
    ]);

    const user1 = await res1.json();
    const user2 = await res2.json();

    console.log(`Promise.all — User 1: ${user1.name}`);
    console.log(`Promise.all — User 2: ${user2.name}`);
  } catch (error) {
    console.log("Error:", error);
  }
}
getMultipleUsers();
