// mock function
// 중간에 리턴값을 바꾸거나 임의로 정해주고 싶다면?
const mockFn = jest.fn();

// Promise값을 mock할수도 있다
mockFn.mockResolvedValue({ name: "Mike" });

test("받아온 이름은 Mike", () => {
  mockFn().then((res) => {
    expect(res.name).toBe("Mike");
  });
});
