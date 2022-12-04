export const findNextNumber = (nums, n) => {
  if (nums === undefined) throw new Error("nums is required");
  if (n === undefined) throw new Error("n is required");
  let i = nums.indexOf(n);
  return i > -1 && i < nums.length - 1 ? nums[i + 1] : null;
};

export const count1sand0s = (str) => {
  if (str === undefined) throw new Error("str is required");
  return { 1: str.split("1").length - 1, 0: str.split("0").length - 1 };
};

export const reverseNumber = (n) => {
  if (n === undefined) throw new Error("n is required");
  return parseFloat(n.toString().split("").reverse().join("")) * Math.sign(n);
};

export const sumArrays = (arrs) => {
  if (arrs === undefined) throw new Error("arrs is required");
  // limited by input format
  /* return arrs.flat().reduce((a, b) => {
    return a + b;
  }, 0);
  */
  // Recursion function
  let sum = 0;
  const flatFunction = (array) => {
    array.forEach((element) => {
      Array.isArray(element) ? flatFunction(element) : (sum += element);
    });
  };
  flatFunction(arrs);
  return sum;
};

export const arrShift = (arr) => {
  if (arr === undefined) throw new Error("arr is required");
  if (arr.length > 1) {
    const firstNum = arr.shift();
    const lastNum = arr.pop();
    arr.unshift(lastNum);
    arr.push(firstNum);
  }
  return arr;
};

export const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");
  for (const key in haystack) {
    if (
      typeof haystack[key] === "string" &&
      haystack[key].toLowerCase().includes(searchTerm.toLowerCase())
    ) {
      return true;
    }
  }
  return false;
};

export const getWordFrequencies = (str) => {
  if (str === undefined) throw new Error("str is required");
  const wordAndFreq = {};
  // remove all special characters then transfer to lowercase split into an array
  const wordsArray = str
    .replace(/[^a-zA-Z ]/g, "")
    .toLowerCase()
    .split(" ");
  wordsArray.forEach((word) => {
    wordAndFreq[word] ? wordAndFreq[word]++ : (wordAndFreq[word] = 1);
  });
  return wordAndFreq;
};
