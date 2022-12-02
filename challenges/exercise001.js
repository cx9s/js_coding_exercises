// Note: Be sure to check out all the exercises corresponding .md files (in docs)! 📘 👍

export function capitalize(word) {
  if (word === undefined) throw new Error("word is required");
  // Your code here!
  return word.substring(0, 1).toUpperCase() + word.substring(1, word.length);
}

export function generateInitials(firstName, lastName) {
  if (firstName === undefined) throw new Error("firstName is required");
  if (lastName === undefined) throw new Error("lastName is required");
  // Your code here!
  return `${firstName.substring(0, 1)}.${lastName.substring(0, 1)}`;
}

export function addVAT(originalPrice, vatRate) {
  if (originalPrice === undefined) throw new Error("originalPrice is requied");
  if (vatRate === undefined) throw new Error("vatRate is required");
  // Your code here!
  const finalPrice = originalPrice * (1 + vatRate / 100);
  // '+' remove unnecessary ‘0’ at the end of number, e.g. 3.30 -> 3.3
  return +finalPrice.toFixed(2);
}

export function getSalePrice(originalPrice, reduction) {
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (reduction === undefined) throw new Error("reduction is required");
  // Your code here!
  const finalPrice = originalPrice * (1 - reduction / 100);
  return +finalPrice.toFixed(2);
}

export function getMiddleCharacter(str) {
  if (str === undefined) throw new Error("str is required");
  // Your code here!
  // i is floor(half of the number of characters)
  const i = Math.floor(str.length / 2);
  let result = str[i];
  if (str.length % 2 === 0 && i > 0) {
    result = str[i - 1] + result;
  }
  return result;
}

export function reverseWord(word) {
  if (word === undefined) throw new Error("word is required");
  // Your code here!
  return word.split("").reverse().join("");
}

export function reverseAllWords(words) {
  if (words === undefined) throw new Error("words is required");
  // Your code here!
  return words.map((word) => word.split("").reverse().join(""));
}

export function countLinuxUsers(users) {
  if (users === undefined) throw new Error("users is required");
  // Your code here!
  return users.filter((user) => user.type === "Linux").length;
}

export function getMeanScore(scores) {
  if (scores === undefined) throw new Error("scores is required");
  // Your code here!
  return +(scores.reduce((a, b) => a + b, 0) / scores.length).toFixed(2);
}

export function simpleFizzBuzz(n) {
  if (n === undefined) throw new Error("n is required");
  // Your code here!
  return n % 3 === 0 && n % 5 === 0
    ? "fizzbuzz"
    : n % 3 === 0
    ? "fizz"
    : n % 5 === 0
    ? "buzz"
    : n;
}
