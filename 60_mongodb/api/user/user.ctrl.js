const UserModel = require("../../models/user");

const showSignupPage = (req, res) => {
  res.render("user/signup");
};

// 회원가입
// - 성공 : (201 : Created) 응답, 생성된 Useer 객체 반환
// - 오류 : 필수입력값 누락 (400 : Bad Request)
//          이메일이 중복될 경우 (409 : conflict)

const signup = (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password)
    return res.status(400).send("필수값이 입력되지 않았습니다.");

  UserModel.findOne({ email }),
    (err, result) => {
      if (err) return res.status(500).send("회원가입 시 오류가 발생했습니다.");
      if (result) return res.status(409).send("이미 사용중인 이메일입니다.");
    };
};

module.exports = { showSignupPage };
