const fn = require("./fn");

let user;
beforeAll(async () => {
  user = await fn.connectDb();
});

afterAll(async () => {
  await fn.disconnectDb();
});

test("이름 Mike", () => {
  expect(user.name).toBe("Mike");
});

test("나이 30", () => {
  expect(user.age).toBe(30);
});

test("성별 남성", () => {
  expect(user.gender).toBe("male");
});
