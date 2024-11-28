const fn = require("./fn");

jest.mock("./fn");
// 이미 있는 메소드, 서비스에 실제로 사용되는 메소드들 있잖아.
// 그걸 써서 user를 만들어버리면 실제로 user가 생겨버린다고
// 그렇다고 이때까지 mock return value를 가진 mockFn들을 만드는것도 귀찮다
// 이미 있는 모듈을 가져와서 mock하고 return값을 정해주면
// mock함수를 따로 만들 필요 없이 함수 이름을 그대로 가져와서 쓸 수 있다
fn.createUser.mockReturnValue({ name: "Mike" });

test("유저를 만든다", () => {
  const user = fn.createUser("Mike");
  expect(user.name).toBe("Mike");
  // 실제 함수가 실행되었으면 찍혔을 로그가 나오지 않는다
});
