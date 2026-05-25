let convertToOldRoman = require("./convert-to-old-roman");

test("Test for empty,null,undefined", () => {
  expect(convertToOldRoman("")).toEqual("");
  expect(convertToOldRoman()).toEqual("");
  expect(convertToOldRoman("1FVGBHN")).toEqual("");
});
