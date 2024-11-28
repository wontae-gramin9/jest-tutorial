const fn = require("./fn");

test("async await는 더 간단한 3초 후 이름은 Mike", async () => {
  const age = await fn.getAge();
  expect(age).toBe(30);
});
