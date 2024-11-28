const fn = {
  add: (a, b) => a + b,
  makeUser: (name, age, gender) => ({ name, age, gender: undefined }),
  throwErr: () => {
    throw new Error("특정 에러의 내용을 정확히 할때는 parameter로");
  },
};

module.exports = fn;
