// mock function
// 중간에 리턴값을 바꾸거나 임의로 정해주고 싶다면?
const mockFn = jest.fn();

// yield처럼, 함수가 call될때마다 순서대로 return값을 정해주는 것이다.
mockFn
  .mockReturnValueOnce(true)
  .mockReturnValueOnce(false)
  .mockReturnValueOnce(true)
  .mockReturnValue(false);

// 4번 call함
const result = [1, 2, 3, 4, 5].filter((num) => mockFn(num));

test("홀수는 1.3", () => {
  expect(result).toStrictEqaul([1, 3, 5]);
});
