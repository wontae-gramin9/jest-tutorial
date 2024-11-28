const fn = require("./fn");

let num = 0;

// beforeEach: 모든 테스트 이전에 한번씩 실행
// afterEach: 모든 테스트 이후에 한번씩 실행
// 없다면, global변수인 num에 값이 계속 더해지기 때문에 실패한다
beforeEach(() => {
  num = 0;
});

test("0+1 = 1", () => {
  num = fn.add(num, 1);
  expect(num).toBe(1);
});

test("0+2 = 2", () => {
  num = fn.add(num, 2);
  expect(num).toBe(2);
});

test("0+3 = 3", () => {
  num = fn.add(num, 3);
  expect(num).toBe(3);
});
