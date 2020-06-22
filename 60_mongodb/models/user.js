const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    maxlength: 50,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },
  role: {
    type: Number,
    default: 0, // 0:일반 사용자 1:관리자
  },
  token: {
    type: String,
  },
});

// 모델명s -> 컬렉션이 만들어짐
module.exports = mongoose.model("user", UserSchema, "users"); // <- 직접 컬렉션명 지정도 가능
