import {
  createRange,
  getScreentimeAlertList,
  hexToRGB,
  findWinner,
} from "../challenges/exercise007";

describe("createRange", () => {
  test("return a range of numbers as an array, with received the start, end and the step. Step is the gap between numbers in the range.", () => {
    expect(createRange(3, 11, 2)).toEqual([3, 5, 7, 9, 11]);
  });
  test("return a range of numbers as an array, with received the start and end. Step is default 1.", () => {
    expect(createRange(3, 11)).toEqual([3, 4, 5, 6, 7, 8, 9, 10, 11]);
  });
});

describe("getScreentimeAlertList", () => {
  test("return an array of usernames of users who have used more than 100 minutes of screentime for a given date.", () => {
    expect(
      getScreentimeAlertList(
        [
          {
            username: "beth_1234",
            name: "Beth Smith",
            screenTime: [
              {
                date: "2019-05-01",
                usage: { twitter: 34, instagram: 22, facebook: 40 },
              },
              {
                date: "2019-05-02",
                usage: { twitter: 56, instagram: 40, facebook: 31 },
              },
              {
                date: "2019-05-03",
                usage: { twitter: 12, instagram: 15, facebook: 19 },
              },
              {
                date: "2019-05-04",
                usage: { twitter: 10, instagram: 56, facebook: 61 },
              },
            ],
          },
          {
            username: "sam_j_1989",
            name: "Sam Jones",
            screenTime: [
              {
                date: "2019-06-11",
                usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10 },
              },
              {
                date: "2019-06-13",
                usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16 },
              },
              {
                date: "2019-06-14",
                usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31 },
              },
            ],
          },
          {
            username: "chris_1983",
            name: "Chris Chen",
            screenTime: [
              {
                date: "2019-05-04",
                usage: { mapMyRun: 50, whatsApp: 20, facebook: 30, safari: 10 },
              },
            ],
          },
          {
            username: "Sunny_84",
            name: "Sunny Chen",
            screenTime: [
              {
                date: "2019-05-04",
                usage: { mapMyRun: 20, whatsApp: 20, facebook: 30, safari: 10 },
              },
            ],
          },
        ],
        "2019-05-04"
      )
    ).toEqual(["beth_1234", "chris_1983"]);
  });
});

describe("hexToRGB", () => {
  test("return an RGB color code transformed from hexadecimal color code.", () => {
    expect(hexToRGB("#FF1133")).toBe("rgb(255,17,51)");
  });
});

describe("findWinner", () => {
  test("return 'X' if player X has won, '0' if the player 0 has won, and null if there is currently no winner.", () => {
    expect(
      findWinner([
        ["X", null, null],
        ["X", null, "0"],
        ["X", null, "0"],
      ])
    ).toBe("X");
    expect(
      findWinner([
        ["0", null, null],
        ["X", "0", "X"],
        [null, null, "0"],
      ])
    ).toBe("0");
    expect(
      findWinner([
        [null, "0", null],
        ["0", null, null],
        ["X", "X", "X"],
      ])
    ).toBe("X");
    expect(
      findWinner([
        ["X", "0", null],
        ["0", "X", null],
        ["X", null, "0"],
      ])
    ).toBe(null);
    expect(
      findWinner([
        [null, null, null],
        ["0", "X", null],
        ["X", null, "0"],
      ])
    ).toBe(null);
  });
});
