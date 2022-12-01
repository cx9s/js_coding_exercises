// Note: Be sure to check out all the exercises corresponding .md files (in docs)! 📘 👍

export function capitalize(word) {
  if (word === undefined) throw new Error("word is required");
  return word.substring(0, 1).toUpperCase() + word.substring(1, word.length);
}

export function generateInitials(firstName, lastName) {
  if (firstName === undefined) throw new Error("firstName is required");
  if (lastName === undefined) throw new Error("lastName is required");
  return `${firstName.substring(0, 1)}.${lastName.substring(0, 1)}`;
}

export function addVAT(originalPrice, vatRate) {
  if (originalPrice === undefined) throw new Error("originalPrice is requied");
  if (vatRate === undefined) throw new Error("vatRate is required");
  const finalPrice = originalPrice * (1 + vatRate / 100);
  return Number.isInteger(finalPrice) ? finalPrice : +finalPrice.toFixed(2);
}

export function getSalePrice(originalPrice, reduction) {
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (reduction === undefined) throw new Error("reduction is required");
  const finalPrice = originalPrice * (1 - reduction / 100);
  return Number.isInteger(finalPrice) ? finalPrice : +finalPrice.toFixed(2);
}

export function getMiddleCharacter(str) {
  if (str === undefined) throw new Error("str is required");
  const i = Math.floor(str.length / 2);
  let result = str[i];
  if (str.length % 2 === 0 && i > 0) {
    result = str[i - 1] + result;
  }
  return result;
}

export function reverseWord(word) {
  if (word === undefined) throw new Error("word is required");
  return word.split("").reverse().join("");
}

export function reverseAllWords(words) {
  if (words === undefined) throw new Error("words is required");
  return words.map((word) => word.split("").reverse().join(""));
}

export function countLinuxUsers(users) {
  if (users === undefined) throw new Error("users is required");
  return users.filter((user) => user.type === "Linux").length;
}

export function getMeanScore(scores) {
  if (scores === undefined) throw new Error("scores is required");
  return +(scores.reduce((a, b) => a + b, 0) / scores.length).toFixed(2);
}

export function simpleFizzBuzz(n) {
  if (n === undefined) throw new Error("n is required");
  return n % 3 === 0 && n % 5 === 0
    ? "fizzbuzz"
    : n % 3 === 0
    ? "fizz"
    : n % 5 === 0
    ? "buzz"
    : n;
}
