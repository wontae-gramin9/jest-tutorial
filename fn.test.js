// Network request나 db connect를 테스트하려면
// Network나 db상태에 따라서 테스트 결과가 달라질 수 있는 일이 생긴다
// 테스트는 항상 동일한 코드는 동일한 결과를 내야 합니다

// 그리고 진짜 request나 connect를 쏘면, 꽤나 긴 작업이 되기 때문에
// 테스트 코드가 더 길어지는 배보다 배꼽이 더 큰 경우가 생길 수 있다

// 그러므로 implementation은 전혀 신경쓰지 않고
// return값만 만들어주면 되는 mock function을 만들어 사용한다

const mockFn = jest.fn();

mockFn();
mockFn(1);
console.log(
  "함수가 총 몇번 call되었는지, 각각의 인수는 무엇이었는지: ",
  mockFn.mock.calls
);

test("함수 호출횟수 2번", () => {
  expect(mockFn.mock.calls.length).toBe(2);
});

test("2번째로 호출된 함수에 전달된 첫번째 인수는 1이다", () => {
  expect(mockFn.mock.calls[1][0]).toBe(1);
});
