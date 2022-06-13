/*
    프로젝트를 기록하는 게시판 - 갤러리 게시판 형식
    
*/
import mongoose from "mongoose";
import shortId from "../types/short-id.js";

const boardSchema = mongoose.Schema(
  {
    shortId,
    thumbnail: {
      type: Object,
    },
    title: {
      type: String,
      required: true,
    },
    subText: {
      type: String,
    },
    //project / practice
    category: {
      type: String,
      required: true,
    },
    //web/app
    tag: {
      type: String,
      required: true,
    },
    content: {
      type: String,
    },
    createdAt: {
      // 글을 생성한 날짜
      type: Date,
      default: Date.now,
    },
    date: {
      type: String,
    },
  },
  { timestamps: true }
);

const Board = mongoose.model("Board", boardSchema);

export default Board;
