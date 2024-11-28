const fn = {
  add: (a, b) => a + b,
  // 유저를 만드는 함수를 테스트해보고 싶은데,
  // 테스트할때마다 새로운 유저가 생기면 안되겠지?
  // 그렇다고 만들어놓고 매 테스트 이후마다 롤백하는것도 귀찮을 거야.
  createUser: (name) => {
    console.log("실제로 사용자가 생성되어버립니다.");
    console.log("다시 DB에 접속해서 방금 만든 유저를 삭제해야 합니다.");
    return {
      name,
    };
  },
};

module.exports = fn;
