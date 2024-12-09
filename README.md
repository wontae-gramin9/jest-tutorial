# Jest

![Course snapshot](https://github.com/user-attachments/assets/007e75b6-f261-4a22-b37f-2c4e5875b965)

[Jest Tutorial Playlist by 코딩앙마](https://www.youtube.com/watch?v=g4MdUjxA-S4&list=PLZKTXPmaJk8L1xCg_1cRjL5huINlP2JKt&index=1)

### Purpose

To write React Testing library better, as good testing usually works with mock function and network request.

### Content

Code can be found in the Git commit log.

1. Matcher

   - toBe vs toEqual vs toStrictEqual
   - toBeNull, toBeNull, toBeUndefined, toBeDefined, toBeFalsy, toBeTruthy
   - Number calculating, number comparing, floating points
   - toMatch(Regular expression)
   - toContain(Array)
   - toThrow(Error handling)

2. Callback

   - done() keyword
     - Using in try catch

3. Asynchronous

   - Promise
     - !! Crucial to return Promise
   - Async/await

4. Setup and Teardown

   - beforeEach, afterEach
   - beforeAll, afterAll

5. Describe

   - test grouping

6. Mokcing

   - mockup function
     - When testing network requests or database connections, the test results may vary depending on their state.
     - Tests should always produce the same result for the same code, so mock functions are used.

Mock Function calls

```js
mockFn = jest.fn();
mockFn();
mockFn(1); // arguments can be passed

mockFn.mock.calls; // Information about mockFn calls
test("The first argument passed when the function is called the second time is 1", () => {
  expect(mockFn.mock.calls[1][0]).toBe(1);
});
```

Mock function that returns a value

```js
const mockFn = jest.fn((num) => num + 1);
mockFn.mock.results; // Information about mockFn return values

mockFn(10);
test("The value increased by 1 from 10", () => {
  expect(mockFn.mock.results[1].value).toBe(11);
});
```

Changing or setting return values

```js
const mockFn = jest.fn();

mockFn
  .mockReturnValueOnce(true)
  .mockReturnValueOnce(false)
  .mockReturnValueOnce(true)
  .mockReturnValue(false);

const result = [1, 2, 3, 4, 5].filter((num) => mockFn(num));
test("Odd numbers are 1, 3, 5", () => {
  expect(result).toStrictEqaul([1, 3, 5]);
});

mockFn.mockResolvedValue({ name: "Mike" });
```

MOCKING MODULE

```js
// By mocking and setting return values for an existing module,
// you can reuse the function name without creating a new mock function

// Imagine you have methods or services that are actually used somewhere.
// If you use them to create a user, it might actually create a real user.
// It’s tedious to create mock functions with mock return values all the time.
const fn = require("./fn");
jest.mock("./fn");
fn.createUser.mockReturnValue({ name: "Mike" });
test("The received name is Mike", () => {
  mockFn().then((res) => {
    expect(res.name).toBe("Mike");
  });
});

test("Creates a user", () => {
  const user = fn.createUser("Mike");
  // The actual function does not run (no database connection occurs)
  expect(user.name).toBe("Mike");
});
```
