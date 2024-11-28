const fn = require("./fn");

// 정규표현식 toMatch
test("Hello world에 a가 있는가?", () => {
  expect("Hello world").toMatch(/h/i);
});
