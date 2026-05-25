const passwordVerifier = require("./password-verifier");
test("Password is not null/is null", () => {
  expect(passwordVerifier("Password12345678")).toEqual("Password accepted");
  expect(passwordVerifier()).toEqual("Password rejected");
});
test("Password is 8 characters or more", () => {
  expect(passwordVerifier("Mypassword1234")).toEqual("Password accepted");
  expect(passwordVerifier("1234")).toEqual("Password rejected");
});
test("Upper case letter", () => {
  expect(passwordVerifier("12345678")).toEqual("Password rejected");
  expect(passwordVerifier("12345Y78")).toEqual("Password accepted");
});

test("Password has a number", () => {
  expect(passwordVerifier("ABCDEFGHIJ1")).toEqual("Password accepted");
  expect(passwordVerifier("ABCDEFGHIJ")).toEqual("Password rejected");
});
