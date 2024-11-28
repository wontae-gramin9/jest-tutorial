const fn = require("./fn");

test("3초 후 받아온 이름은 Mike", (done) => {
  function callback(name) {
    try {
      expect(name).toBe("Tom");
      done();
      // done을 전달받았는데, 사용하지 않으면, 혹은 5초가 더 걸리면 실패
    } catch (error) {
      done(error);
    }
  }
  fn.getName(callback);
  // fn.getName가 스택에 올라가고 실행되는 순간 끝나서
  // callback 내부를 실행하지 않는다.
  // done이 도달할때까지 실행을 멈추지 않습니다.
});
