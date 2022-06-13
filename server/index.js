import express from "express";
const app = express();

import bodyparser from "body-parser";
import config from "./config/keys.js";
import cookieParser from "cookie-parser";

import usersRouter from "./routes/users.js";
import boardRouter from "./routes/board.js";
//import dotenv from "dotenv";
import path from 'path';
const __dirname = path.resolve();


//application/x-www-form-urlencoded
app.use(bodyparser.urlencoded({ extends: true }));
// application/json 데이터를 분석해서 가져옴
app.use(bodyparser.json());
// 토큰을 쿠키에 저장하기 위해 사용
app.use(cookieParser());


//router
app.use("/api/users", usersRouter);
app.use("/api/board", boardRouter);

import mongoose from "mongoose"; // mongoDB 사용

mongoose.connect(config.mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log("MongoDB Connected...")).catch((err) => console.log(err));

//api/index.js
app.use(express.static(__dirname+"/build"));

app.get("/*", (req, res) => {
  res.sendFile(__dirname + '/build/index.html')
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
