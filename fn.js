const fn = {
  add: (a, b) => a + b,
  connectUserDb: () => {
    return new Promise((res) => {
      setTimeout(() => {
        res({
          name: "Mike",
          age: 30,
          gender: "male",
        });
      }, 500);
    });
  },
  disconnectUserDb: () => {
    return new Promise((res) => {
      setTimeout(() => {
        res();
      }, 500);
    });
  },
  connectCarDb: () => {
    return new Promise((res) => {
      setTimeout(() => {
        res({
          brand: "bmw",
          name: "z4",
          color: "red",
        });
      }, 500);
    });
  },
  disconnectCarDb: () => {
    return new Promise((res) => {
      setTimeout(() => {
        res();
      }, 500);
    });
  },
};

module.exports = fn;
