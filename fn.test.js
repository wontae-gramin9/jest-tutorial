const fn = require("./fn");

beforeAll(() => console.log("밖 beforeAll")); // 1

// 전역에 Each를 쓰면, 매 describe 블록마다 실행된다는것만 알면 된다
beforeEach(() => console.log("밖 beforeEach")); // 2, 6
afterEach(() => console.log("밖 afterEach")); // 4, 10
afterAll(() => console.log("밖 afterAll")); // -1

test("0+1 = 1", () => {
  expect(fn.add(0, 1).toBe(1)); // 3
});

describe("새로운 scope", () => {
  beforeAll(() => console.log("안 beforeAll")); // 5
  beforeEach(() => console.log("안 beforeEach")); // 7
  afterEach(() => console.log("안 afterEach")); // 9
  afterAll(() => console.log("안 afterAll")); // -2

  test("0+1 = 1", () => {
    expect(fn.add(0, 1).toBe(1)); // 8
  });
});
