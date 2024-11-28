// mock function
// 값을 리턴하는 함수
const mockFn = jest.fn((num) => num + 1);

mockFn(10);
mockFn(20);
mockFn(30);

// 리턴값이 들어있다
console.log(mockFn.mock.results);

test("10에서 1 증가한 값", () => {
  expect(mockFn.mock.results[0].value).toBe(11);
});
test("20에서 1 증가한 값", () => {
  expect(mockFn.mock.results[1].value).toBe(21);
});
test("30에서 1 증가한 값", () => {
  expect(mockFn.mock.results[2].value).toBe(31);
});
