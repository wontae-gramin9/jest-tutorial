const fn = require("./fn");
test("toBe - checking primitive types, reference type are different instances on queue", () => {
  expect(fn.add(1, 1)).toBe(2);
  expect(fn.makeUser("Mike", 30)).toBe({
    name: "Mike",
    age: 30,
  });
});

test("toEqual - reference type, ignores undefined value ", () => {
  expect(fn.add(1, 1)).toEqual(2);
  expect(fn.makeUser("Mike", 30)).toEqual({
    name: "Mike",
    age: 30,
  });
});

test("toStrictEqual - acknowledges undefined value", () => {
  expect(fn.add(1, 1)).toEqual(2);
  expect(fn.makeUser("Mike", 30)).toStrictEqual({
    name: "Mike",
    age: 30,
  });
});
