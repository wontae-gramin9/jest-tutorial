const fn = require("./fn");

// toBeGreaterThan
// toBeGreaterThanOrEqual
// toBeLessThan
// toBeLessThanOrEqual
test("id는 10자 이내여야 합니다", () => {
  const id = "THE_BLACK";
  expect(id.length).toBeLessThanOrEqual();
});

test("비밀번호 4자리", () => {
  const pw = "1234";
  expect(pw).toEqual(4);
  expect(pw).toBe(4);
});

// 부동소수점 계산할 때
test("0.1 + 0.2 = 0.3", () => {
  expect(fn.add(0.1, 0.2)).toBeCloseTo(3);
});
