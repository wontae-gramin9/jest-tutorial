const fn = {
  add: (a, b) => a + b,
  getName: (callback) => {
    const name = "Mike";
    setTimeout(() => {
      // callback(name);
      throw new Error("서버 에러...");
    }, 3000);
  },
};

module.exports = fn;
