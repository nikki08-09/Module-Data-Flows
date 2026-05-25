const passwordVerifier = require("./password-verifier");
test("Password is not null/is null", () => {
  expect(passwordVerifier("Password12345678")).toEqual("Password accepted");
  expect(passwordVerifier()).toEqual("Password rejected");
});
