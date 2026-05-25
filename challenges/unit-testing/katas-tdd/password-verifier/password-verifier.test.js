const passwordVerifier = require("./password-verifier");
test("Password is not null/is null", () => {
  expect(passwordVerifier("Password12345678")).toEqual("Password accepted");
  expect(passwordVerifier()).toEqual("Password rejected");
});
test("Password is 8 characters or more", () => {
  expect(verifier("Mypassword1234")).toEqual("Password accepted");
  expect(verifier("1234")).toEqual("Password rejected");
});
