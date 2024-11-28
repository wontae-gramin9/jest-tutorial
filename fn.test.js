const fn = require("./fn");

test("null", () => {
  expect(null).toBeNull();
});

test("0 is falsy", () => {
  expect(fn.add(1, -1)).toBeFalsy();
});

test("String is truthy", () => {
  expect(fn.add("hello", "world")).toBeTruthy();
});
