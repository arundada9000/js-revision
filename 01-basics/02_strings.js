// JavaScript Strings - Methods, Template Literals, Manipulation

const name = "Arun";
const city = "Butwal";

// Template literals
const greeting = `Hello, my name is ${name} and I'm from ${city}.`;
console.log("Template literal:", greeting);

const multiLine = `
  Name: ${name}
  City: ${city}
  Country: Nepal
`;
console.log("Multi-line string:", multiLine);

// Expression in template
console.log(`Next year ${name} will be ${22 + 1} years old.`);

// String methods
const text = "  JavaScript is awesome!  ";

console.log("Length:", text.length);
console.log("Trim:", text.trim());
console.log("Uppercase:", text.toUpperCase());
console.log("Lowercase:", text.toLowerCase());
console.log("Includes 'awesome':", text.includes("awesome"));
console.log("Index of 'is':", text.indexOf("is"));
console.log("Starts with '  Java':", text.startsWith("  Java"));
console.log("Ends with '!  ':", text.endsWith("!  "));

const str = "Arun Neupane";
console.log("Slice (0,4):", str.slice(0, 4));
console.log("Slice (-6):", str.slice(-6));
console.log("Substring (5,12):", str.substring(5, 12));

const sentence = "I love JavaScript. JavaScript is fun!";
console.log("Replace:", sentence.replace("JavaScript", "JS"));
console.log("Replace all:", sentence.replaceAll("JavaScript", "JS"));

const csv = "apple,banana,orange";
console.log("Split:", csv.split(","));
console.log("Join:", csv.split(",").join(" | "));

const padded = "42";
console.log("Pad start:", padded.padStart(5, "0"));
console.log("Pad end:", padded.padEnd(5, "0"));

const chars = "Arun";
for (const char of chars) {
  console.log("Char:", char);
}
console.log("Character at index 2:", chars.charAt(2));
console.log("Char code at 0:", chars.charCodeAt(0));

