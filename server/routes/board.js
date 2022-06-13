import express from "express";

const router = express.Router();
import multer from "multer";
import Board from "../models/Board.js";
import path from 'path';
const __dirname = path.resolve();
//multer-optional
var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, __dirname+"/build/uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}_${file.originalname}`);
  },
});

var upload = multer({ storage: storage }).single("thumbnail");

//썸네일 이미지
router.post("/upload", (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      return res.json({ success: false, err });
    }
    return res.json({
      success: true,
      image: res.req.file.path,
      fileName: res.req.file.filename,
    });
  });
});

//글 생성
router.post("/create", (req, res) => {
  const board = new Board(req.body);

  board.save((err, boardInfo) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).json({
      success: true,
    });
  });
});

//글 삭제
router.post("/delete/:shortId", (req, res) => {
  const { shortId } = req.params;

  Board.deleteOne({ shortId: shortId }).exec((err, doc) => {
    if (err) return res.status(400).send(err);
    else res.status(200).json({ success: true, doc: doc });
  });
});

//글 수정
router.post("/update/:shortId", (req, res) => {
  const { shortId } = req.params;
  Board.update(
    { shortId: shortId },
    {
      $set: {
        title: req.body.title,
        content: req.body.content,
        thumbnail: req.body.thumbnail,
        category: req.body.category,
        subText: req.body.subText,
        tag: req.body.tag,
        date: req.body.date,
      },
    }
  ).exec((err, doc) => {
    if (err) return res.status(400).send(err);
    else res.status(200).json({ success: true, doc: doc });
  });
});

//특정 게시물 불러오기
router.get("/getDetail/:shortId", (req, res) => {
  const { shortId } = req.params;

  Board.findOne({ shortId: shortId }).exec((err, board) => {
    if (err) return req.status(400).send(err);
    else {
      return res.status(200).json({ success: true, board, shortId });
    }
  });
});

//전체 게시물 - 리스트페이지
router.get("/getList", (req, res) => {
  Board.find({ sort: { createAt: 1 } }).exec((err, boards) => {
    if (err) return res.status(400).send(err);
    else return res.status(200).json({ success: true, boards });
  });
});

//메인
router.get("/getMainList", (req, res) => {
  Board.find({ sort: { createAt: 1 } })
    .limit(3)
    .exec((err, boards) => {
      if (err) return res.status(400).send(err);
      else return res.status(200).json({ success: true, boards });
    });
});

export default router;
