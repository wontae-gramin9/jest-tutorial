// mock function
const mockFn = jest.fn();

function forEachAdd1(arr) {
  arr.forEach((num) => {
    // 내부 함수를 따로 implement하지 않고도 forEachAdd1를 테스트할 수 있다
    mockFn(num + 1);
  });
}

forEachAdd1([10, 20, 30]);

test("함수호출 3번", () => {
  expect(mockFn.mock.calls.length).toBe(3);
});

test("전달된 값 11, 21, 31", () => {
  expect(mockFn.mock.calls[0][0]).toBe(11);
  expect(mockFn.mock.calls[1][0]).toBe(21);
  expect(mockFn.mock.calls[2][0]).toBe(31);
});
