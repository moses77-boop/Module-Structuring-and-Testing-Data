// Implement a function repeatStr
import { repeatStr } from "./repeat-str.js";
// Given a target string `str` and a positive integer `count`,
// When the repeatStr function is called with these inputs,
// Then it should:

// Case: handle multiple repetitions:
// Given a target string `str` and a positive integer `count` greater than 1,
// When the repeatStr function is called with these inputs,
// Then it should return a string that contains the original `str` repeated `count` times.

test("should repeat the string count times", () => {
  const str = "hello";
  const count = 3;
  const repeatedStr = repeatStr(str, count);
  expect(repeatedStr).toEqual("hellohellohello");
});

// Case: handle count of 1:
// Given a target string `str` and a `count` equal to 1,
// When the repeatStr function is called with these inputs,
// Then it should return the original `str` without repetition.
test("should repeat the string 1 time", () => {
  const str = "hello";
  const count = 1;
  const repeatedStr = repeatStr(str, count);
  expect(repeatedStr).toEqual("hello");
});

// Case: Handle count of 0:
// Given a target string `str` and a `count` equal to 0,
// When the repeatStr function is called with these inputs,
// Then it should return an empty string.
test("should return empty string for count of 0", () => {
  const str = "hello";
  const count = 0;
  const repeatedStr = repeatStr(str, count);
  expect(repeatedStr).toEqual("");
});

// Case: Handle negative count:
// Given a target string `str` and a negative integer `count`,
// When the repeatStr function is called with these inputs,
// Then it should throw an error, as negative counts are not valid.
test("should throw an error for negative count", () => {
  expect(() => repeatStr("hello", -1)).toThrow();
});

// Case: Handling special strings: Empty string
// Giving a target empty string `str` and a positive integer `count`,
// When the repeatStr function is called with these inputs,
// Then it should return an empty string.
test("should return an empty string when repeating an empty string", () => {
  const str = "";
  const count = 5;
  const repeatedStr = repeatStr(str, count);
  expect(repeatedStr).toEqual("");
}); 

// Case: Handling special strings: Empty string
// Giving a target empty string `str` and a negative integer `count`,
// When the repeatStr function is called with these inputs,
// Then it should throw an error.
test("should throw error for negative count even with an empty string", () => {
  expect(() => repeatStr("", -1)).toThrow();
});