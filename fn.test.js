const fn = require("./fn");

test("유저리스트에 Mike가 있는가?", () => {
  const user = "Mike";
  const userList = ["Tom", "Mike", "Kai"];
  expect(userList).toContain(user);
});
