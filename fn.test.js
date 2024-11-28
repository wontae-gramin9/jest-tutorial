const fn = require("./fn");

test("이거 에러 나나요?", () => {
  expect(() => fn.throwErr()).toThrow(
    "특정 에러의 내용을 정확히 할때는 parameter로"
  );
});
