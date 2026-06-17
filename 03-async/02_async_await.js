// JavaScript Async/Await — Cleaner Promise Handling

// Using async/await with try/catch
const promiseFive = new Promise((resolve, reject) => {
  const error = false;
  setTimeout(() => {
    console.log("Promise running");
    if (error) {
      reject("Error occurred");
    } else {
      resolve("Promise worked");
    }
  }, 1000);
});

async function consumePromiseFive() {
  try {
    const response = await promiseFive;
    console.log("Response:", response);
  } catch (error) {
    console.log("Error:", error);
  }
}
consumePromiseFive();

// Async chaining — getUsers then getPosts
function getUsers() {
  return new Promise((resolve, reject) => {
    resolve({ id: 1, name: "Arun" });
  });
}

function getPosts(userId) {
  return new Promise((resolve, reject) => {
    resolve(["JavaScript", "React"]);
  });
}

async function showUserPosts() {
  try {
    const user = await getUsers();
    console.log(`User: ${user.name}`);

    const posts = await getPosts(user.id);
    console.log(`Posts:`, posts);
  } catch (error) {
    console.log(error);
  }
}
showUserPosts();

// Simulated fetch with delay
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(["HTML", "CSS", "JS"]);
    }, 2000);
  });
}

async function main() {
  try {
    const data = await fetchData();
    data.forEach((item) => {
      console.log("Topic:", item);
    });
  } catch (error) {
    console.log("Some error occurred:", error);
  }
}
main();

// Async function with multiple awaits
async function getUsersFromAPI() {
  const url = "https://jsonplaceholder.typicode.com/users/1";

  try {
    const res = await fetch(url);
    const user = await res.json();

    console.log(`Name: ${user.name}`);
    console.log(`Email: ${user.email}`);

    return user;
  } catch (error) {
    console.log("Error:", error);
  }
}
getUsersFromAPI();
