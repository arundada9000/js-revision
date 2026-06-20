// JavaScript Optional Chaining & Nullish Coalescing - ?. and ??

// ── Optional Chaining (?.) - Safe nested access ──
const user = {
  name: "Arun",
  address: {
    city: "Butwal",
  },
  preferences: null,
};

// Without optional chaining
if (user && user.address && user.address.city) {
  console.log("City:", user.address.city);
}

// With optional chaining
console.log("City:", user?.address?.city);
console.log("Country:", user?.address?.country);
console.log("Preferences:", user?.preferences?.theme);

// Optional chaining with arrays
const users = [{ name: "Arun" }, { name: "Sita" }];
console.log("First user:", users?.[0]?.name);
console.log("Third user:", users?.[2]?.name ?? "Not found");

// Optional chaining with function calls
const obj = {
  greet: () => "Hello!",
};
console.log("Obj greet:", obj.greet?.());
console.log("Obj farewell:", obj.farewell?.() ?? "No farewell method");

// ── Nullish Coalescing (??) - Default for null/undefined ──
const value1 = null;
const value2 = undefined;
const value3 = 0;
const value4 = "";
const value5 = false;

console.log("null ?? default:", value1 ?? "default");
console.log("undefined ?? default:", value2 ?? "default");
console.log("0 ?? default:", value3 ?? "default");
console.log("'' ?? default:", value4 ?? "default");
console.log("false ?? default:", value5 ?? "default");

// Contrast with ||
console.log("0 || default:", value3 || "default");
console.log("'' || default:", value4 || "default");
console.log("false || default:", value5 || "default");

// ── Short-circuit evaluation ──
true && console.log("AND short-circuit - true continues");
false && console.log("AND short-circuit - false stops");
true || console.log("OR short-circuit - true stops");
false || console.log("OR short-circuit - false continues");

// Practical: safe config access
const config = {
  server: {
    host: "localhost",
    port: 3000,
  },
  // db: null
};

const dbPort = config?.db?.port ?? 5432;
console.log("DB Port:", dbPort);

// Practical: safe API response handling
const apiResponse = {
  data: {
    user: null,
  },
};
const displayName = apiResponse?.data?.user?.name ?? "Guest";
console.log("Display name:", displayName);

