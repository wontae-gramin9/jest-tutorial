const fn = require("./fn");

describe("User DB 관련 작업", () => {
  // describe 블록은 테스트를 단위로 처리할 수 있게 해준다
  // describe 내부의 before~~~, after~~~은 describe 블록마다 실행이 된다.
  let user;
  beforeAll(async () => {
    user = await fn.connectUserDb();
  });

  afterAll(async () => {
    await fn.disconnectUserDb();
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
});

describe("Car 관련 작업", () => {
  let car;
  beforeAll(async () => {
    car = await fn.connectCarDb();
  });

  afterAll(async () => {
    await fn.disconnectCarDb();
  });

  test("브랜드 bmw", () => {
    expect(car.brand).toBe("bmw");
  });

  test("이름 z4", () => {
    expect(car.name).toBe("z4");
  });

  test("색 red", () => {
    expect(car.color).toBe("red");
  });
});
