import {
  sumMultiples,
  isValidDNA,
  getComplementaryDNA,
  isItPrime,
  createMatrix,
  areWeCovered,
} from "../challenges/exercise006";

describe("sumMultiples", () => {
  test("return the sum of any numbers which are a multiple of 3 or 5", () => {
    expect(sumMultiples([5, 3, 7, 15, 1, 9, 10])).toBe(42);
    expect(sumMultiples([7, 8, 14])).toBe(0);
  });

  test("returns 0 if no number in the array", () => {
    expect(sumMultiples([0])).toBe(0);
  });
});

describe("isValidDNA", () => {
  test("return true if the string contains characters C, G, T or A only.", () => {
    expect(isValidDNA("CGTAATG")).toBe(true);
    expect(isValidDNA("AAATT")).toBe(true);
    expect(isValidDNA("CGTKEWAAmsl")).toBe(false);
    expect(isValidDNA("TACG A")).toBe(false);
  });

  test("The string should be case sensitive", () => {
    expect(isValidDNA("tCGaaCt")).toBe(false);
  });

  test("returns false if no character in the string", () => {
    expect(isValidDNA("")).toBe(false);
  });
});

describe("getComplementaryDNA", () => {
  test("return a string of the complementary base pairs for a valid DNA string, A-T, C-G.", () => {
    expect(getComplementaryDNA("ATCGAAGCTA")).toBe("TAGCTTCGAT");
  });
});

describe("isItPrime", () => {
  test("return true if input number is a prime number.", () => {
    expect(isItPrime(79)).toBe(true);
    expect(isItPrime(2)).toBe(true);
    expect(isItPrime(0)).toBe(false);
    expect(isItPrime(1)).toBe(false);
    expect(isItPrime(18)).toBe(false);
    expect(isItPrime(-5)).toBe(false);
    expect(isItPrime(9.18)).toBe(false);
  });
});

describe("createMatrix", () => {
  test("return an array of n arrays, each filled with n items, each item is parameter 'fill'.", () => {
    expect(createMatrix(3, "foo")).toEqual([
      ["foo", "foo", "foo"],
      ["foo", "foo", "foo"],
      ["foo", "foo", "foo"],
    ]);
    expect(createMatrix(1, 9)).toEqual([[9]]);
  });
});

describe("areWeCovered", () => {
  test("return true if there are at least 3 staff scheduled for the given day.", () => {
    expect(
      areWeCovered(
        [
          { name: "Sally", rota: ["Monday", "Tuesday", "Friday", "Sunday"] },
          {
            name: "Pedro",
            rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"],
          },
          { name: "Chris", rota: ["Tuesday", "Saturday", "Sunday"] },
          { name: "Sunny", rota: ["Monday", "Thursday", "Friday", "Sunday"] },
        ],
        "Tuesday"
      )
    ).toBe(true);
    expect(
      areWeCovered(
        [
          { name: "Sally", rota: ["Monday", "Tuesday", "Friday", "Sunday"] },
          {
            name: "Pedro",
            rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"],
          },
          { name: "Chris", rota: ["Tuesday", "Saturday", "Sunday"] },
          { name: "Sunny", rota: ["Monday", "Thursday", "Friday", "Sunday"] },
        ],
        "Friday"
      )
    ).toBe(false);
    expect(
      areWeCovered(
        [
          { name: "Sally", rota: ["Monday", "Tuesday", "Friday", "Sunday"] },
          {
            name: "Pedro",
            rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"],
          },
          { name: "Chris", rota: ["Tuesday", "Saturday", "Sunday"] },
          { name: "Sunny", rota: ["Monday", "Thursday", "Friday", "Sunday"] },
        ],
        "Sunday"
      )
    ).toBe(true);
  });
});
