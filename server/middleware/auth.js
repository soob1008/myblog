import User from "../models/Users.js";

let auth = (req, res, next) => {
  //인증처리하는 곳

  //클라이언트 쿠키에서 토큰을 가져온다
  let token = req.cookies.x_auth;

  //토큰을 복호화한 후 유저를 찾는다.
  User.statics.findByToken(token, (err, user) => {
    if (err) throw err;
    //유저가 없으면
    if (!user) return res.json({ isAuth: false, error: true });
    //유저가 있으면
    req.token = token;
    req.user = user;
    next();
  });
};

export default auth;
