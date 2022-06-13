import express from "express";
const router = express.Router();

import User from "../models/Users.js";
import auth from "../middleware/auth.js";

/*
    회원가입
    - express 미들웨어 body-parser를 사용해서 post방식으로 전송된 데이터의 body로 파라미터를 추출한 후, save하여
    db에 저장
*/
router.post("/join", (req, res) => {
  User.findOne({ email: req.body.email }, (err, _user) => {
    if (_user) {
      return res.json({
        // 이메일이 중복된다면 json객체를 반환한다.
        success: false,
        message: "이미 존재하는 이메일 입니다.",
      });
    } else {
      const user = new User(req.body);

      //회원가입 할 때 필요한 정보들을 client에서 가져오면 데이터베이스에 저장한다.
      user.save((err, userInfo) => {
        if (err) return res.json({ success: false, err });
        return res.status(200).json({
          success: true,
        });
      });
    }
  });
});

/* 로그인 */
router.post("/login", (req, res) => {
  //요청된 이메일을 데이터베이스에 있는지 찾는다.
  User.findOne({ email: req.body.email }, (err, userInfo) => {
    if (!userInfo) {
      return res.json({
        loginSuccess: false,
        message: "제공된 이메일에 해당하는 유저가 없습니다.",
      });
    }

    //요청된 이메일이 데이터베이스에 있다면 비밀번호가 맞는지 확인한다.
    userInfo.comparePassword(req.body.password, (err, isMatch) => {
      if (!isMatch)
        return res.json({
          loginSuccess: false,
          message: "비밀번호가 틀렸습니다.",
        });

      //비밀번호가 맞다면 토큰을 생성한다.
      userInfo.generateToken((err, user) => {
        if (err) return res.status(400).send(err);

        //token을 저장한다. 쿠키/로컬스토리지 등등..
        res.cookie("x_auth", user.token).status(200).json({
          loginSuccess: true,
          userId: user._id,
        });
      });
    });
  });
});

//auth 인증
router.get("/auth", auth /* 미들웨어 */, (req, res) => {
  //미들웨어 인증이 true면 실행
  //클라이언트에게 유저정보 전달
  res.status(200).json({
    _id: req.user._id,
    isAdmin: req.user.role === 0 ? false : true,
    isAuth: true,
    email: req.user.email,
    name: req.user.name,
  });
});

// 로그아웃 - 토큰을 지워주기(자동으로 인증이 풀리므로 로그아웃)
router.get("/logout", auth, (req, res) => {
  User.findOneAndUpdate({ _id: req.user._id }, { token: "" }, (err, user) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).send({
      success: true,
    });
  });
});

export default router;
