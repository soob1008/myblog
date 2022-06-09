const express = require('express');
const app = express();
const bodyparser = require('body-parser');

const config = require('./config/keys');
const cookieParser = require('cookie-parser');

const usersRouter = require('./routes/users.js');
const boardRouter = require('./routes/board.js');

//application/x-www-form-urlencoded
app.use(bodyparser.urlencoded({ extends: true }));
// application/json 데이터를 분석해서 가져옴
app.use(bodyparser.json());
// 토큰을 쿠키에 저장하기 위해 사용
app.use(cookieParser());

//router
app.use('/api/users', usersRouter);
app.use('/api/board', boardRouter);

const mongoose = require('mongoose'); // mongoDB 사용
mongoose
    .connect(config.mongoURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log('MongoDB Connected...'))
    .catch((err) => console.log(err));

//api/index.js
app.use(express.static(path.join(__dirname, '/client/build')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/client/build', 'index.html'));
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
