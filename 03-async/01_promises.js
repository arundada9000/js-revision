// JavaScript Promises — Creation, Chaining, Composition

// Basic Promise
const promiseOne = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Async task is complete.");
    resolve();
  }, 1000);
});
promiseOne.then(() => {
  console.log("Promise consumed.");
});

// Promise with inline then
new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Async task 2");
    resolve();
  }, 1000);
}).then(() => {
  console.log("Async 2 resolved");
});

// Promise resolving with data
const promiseThree = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ username: "Arun", email: "arun@gmail.com" });
  }, 100);
});
promiseThree.then((user) => {
  console.log("User:", user);
});

// Chaining .then and error handling with .catch
const promiseFour = new Promise((resolve, reject) => {
  setTimeout(() => {
    const error = false;
    if (!error) {
      resolve({ username: "Arun", password: "123" });
    } else {
      reject("ERROR: Something went wrong");
    }
  }, 2000);
});

promiseFour
  .then((user) => {
    console.log("User:", user);
    return user.username;
  })
  .then((username) => {
    console.log("Username:", username);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("The promise is either resolved or rejected");
  });

// Promise with error handling
new Promise((resolve, reject) => {
  const error = false;
  setTimeout(() => {
    console.log("Promise running");
    if (error) {
      reject("Error occurred");
    } else {
      resolve("Promise worked");
    }
  }, 1000);
})
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log("Promise end");
  });

// Simple age check with Promise
function checkAge(age) {
  return new Promise((resolve, reject) => {
    if (age >= 18) {
      resolve("Access Granted");
    } else {
      reject("Access Denied");
    }
  });
}
checkAge(17)
  .then((data) => console.log(data))
  .catch((err) => console.log(err))
  .finally(() => console.log("Promise ended"));

// Chaining Promises — dependent async operations
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

getUsers()
  .then((user) => {
    console.log(`User: ${user.name}`);
    return getPosts(user.id);
  })
  .then((posts) => {
    console.log(`Posts:`, posts);
  })
  .catch((err) => {
    console.log(err);
  });

// Promise.all — wait for multiple promises
async function fetchMultipleUsers() {
  const [res1, res2] = await Promise.all([
    fetch("https://jsonplaceholder.typicode.com/users/1"),
    fetch("https://jsonplaceholder.typicode.com/users/2"),
  ]);

  const user1 = await res1.json();
  const user2 = await res2.json();

  console.log(`User 1: ${user1.name}`);
  console.log(`User 2: ${user2.name}`);
}
fetchMultipleUsers();

// Promise.race — first settled promise wins
function checkServer() {
  const mem = 0.4;

  const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (mem < 0.5) resolve("p1 is online");
      else reject("p1 down");
    }, 2000);
  });

  const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (mem > 0.5) resolve("p2 is online");
      else reject("p2 is down");
    }, 10000);
  });

  Promise.race([promise1, promise2])
    .then((result) => console.log(result))
    .catch((result) => console.log(result));
}
checkServer();

// String prototype extension — checking for "Arun"
String.prototype.containsArun = function () {
  console.log("String:", this.toString());
  if (this.toString().toLowerCase().includes("arun")) {
    console.log("This string mentions Arun!");
  } else {
    console.log("No mention of Arun here");
  }
};
"Hello Arun ji".containsArun();
"This is just a test".containsArun();
