/**
 * This function will receive an array of numbers and should return the sum
 * of any numbers which are a multiple of 3 or 5
 * @param {Array} arr
 * @returns {Number}
 */
export const sumMultiples = (arr) => {
  if (arr === undefined) throw new Error("arr is required");
  const sum = arr.reduce((a, b) => {
    // add b to a if the number b is a multiple of 3 or 5
    return b % 3 === 0 || b % 5 === 0 ? a + b : a;
  }, 0);
  return sum;
};

/**
 * This function will receive a string of characters and should return true/false depending on whether it is a valid DNA string. A valid DNA string may contain characters C, G, T or A only.
 * @param {String} str
 * @returns {Boolean}
 */
export const isValidDNA = (str) => {
  if (str === undefined) throw new Error("str is required");
  let isDNA = false;
  for (const char of str) {
    if (/[CGTA]/.test(char)) {
      isDNA = true;
    } else {
      isDNA = false;
      break;
    }
  }
  return isDNA;
};

/**
 * This function will receive a valid DNA string (see above) and should return a string of the complementary base pairs. In DNA, T always pairs with A, and C always pairs with G. So a string of "ACTG" would have a complementary DNA string of "TGAC".
 * @param {String} str
 * @returns {String}
 */
export const getComplementaryDNA = (str) => {
  if (str === undefined) throw new Error("str is required");
  const complementaryBasePairs = {
    A: "T",
    T: "A",
    G: "C",
    C: "G",
  };
  return str.replace(/A|T|G|C/g, function (char) {
    return complementaryBasePairs[char];
  });
};

/**
 * This function should receive a number and return true/false depending on whether it is a prime number or not. A prime number is a number that can only be divided evenly by 1 and itself (for example, 7)
 * @param {Number} n
 * @returns {Boolean}
 */
export const isItPrime = (n) => {
  if (n === undefined) throw new Error("n is required");
  let isPrime = true;
  if (!(n > 1) || !Number.isInteger(n)) {
    return !isPrime;
  } else {
    for (let divisor = 2; divisor < n; divisor++) {
      if (n % divisor === 0) return !isPrime;
    }
    return isPrime;
  }
};

/**
 * This function should receive a number and return an array of n arrays, each filled with n items. The parameter "fill" should be used as the filler of the arrays. For example, given parameters 3 and "foo" the resulting matrix should be:
 * [
 *   ["foo", "foo", "foo"],
 *   ["foo", "foo", "foo"],
 *   ["foo", "foo", "foo"]
 * ]
 * @param {Number} n
 * @param {Any} fill
 * @returns {Array}
 */
export const createMatrix = (n, fill) => {
  if (n === undefined) throw new Error("n is required");
  if (fill === undefined) throw new Error("fill is required");
  const matrix = [];
  for (let i = 0; i < n; i++) {
    matrix.push([]);
    for (let m = 0; m < n; m++) {
      matrix[i].push(fill);
    }
  }
  return matrix;
};

/**
 * This function takes an array of staff objects in the format:
 * [
 *  { name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
 *  { name: "Pedro", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
 *  ...etc
 * ]
 * and a day of the week. For the café to run successfully, at least 3 staff members are required per day. The function should return true/false depending on whether there are enough staff scheduled for the given day.
 * @param {Array} staff
 * @param {String} day
 * @returns {Boolean}
 */
export const areWeCovered = (staff, day) => {
  if (staff === undefined) throw new Error("staff is required");
  if (day === undefined) throw new Error("day is required");
  const scheduledStaff = staff.filter((person) => {
    if (person.rota.includes(day)) {
      return person.name;
    }
  }).length;
  return scheduledStaff > 2 ? true : false;
};
