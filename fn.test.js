const fn = require("./fn");

test("Promise로 받아온 3초 후 이름은 Mike", () => {
  return fn.getAge().then((age) => {
    expect(age).toBe(30);
  });
  // Promise를 return해줘야하지만 기다린다.

  // 혹은 return에 resolves matcher를 사용할수도 있다
  return expect(fn.getAge()).resolves.toBe(30);
  // 에러일 때 (에러메시지 정규표현식 매치)
  return expect(fn.getAge()).rejects.toMatch(/error/i);
});
