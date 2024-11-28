const fn = {
  add: (a, b) => a + b,
  getName: (callback) => {
    const name = "Mike";
    setTimeout(() => {
      // callback(name);
      throw new Error("서버 에러...");
    }, 3000);
  },

  getAge: () => {
    const age = 30;
    return new Promise((res, rej) => {
      setTimeout(() => {
        res(age);
      }, 3000);
    });
  },
};

module.exports = fn;
