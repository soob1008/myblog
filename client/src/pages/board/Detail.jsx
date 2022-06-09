import React, { useEffect, useState } from 'react';
import Layout from '../../components/Base/Layout';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getDetailBoard, deleteBoard } from '../../actions/board_actions';
import Parser from 'html-react-parser';

const Detail = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { shortId } = useParams();
  //data
  const [data, setData] = useState({});

  useEffect(() => {
    dispatch(getDetailBoard(data, shortId)).then((response) => {
      if (response.payload.success) {
        const dataBoard = response.payload.board;

        setData({
          title: dataBoard.title,
          tag: dataBoard.tag,
          cate: dataBoard.category,
          content: Parser(dataBoard.content),
          date: dataBoard.date,
        });
      } else {
        alert('데이터를 불러오지 못했습니다.');
      }
    });
  }, []);

  const onDeleteHandler = () => {
    dispatch(deleteBoard(data, shortId)).then((response) => {
      if (response.payload.success) {
        alert('해당 게시물이 삭제되었습니다.');
        navigate('/board/list');
      } else {
        alert('삭제에 실패했습니다.');
      }
    });
  };

  return (
    <Layout>
      <div className="inner">
        <div className="sub brd-detail">
          <div className="tit">
            <h4>{data.cate}</h4>
            <h2>{data.title}</h2>
            <div className="info">
              <div className="left">
                <span>{data.tag}</span>
                <span>{data.date}</span>
              </div>
              <div className="right">
                <Link
                  to={`/board/update/${shortId}`}
                  className="list-btn btn btn-type2 medium"
                >
                  수정
                </Link>
                <button
                  className="list-btn btn btn-type2 medium"
                  onClick={onDeleteHandler}
                >
                  삭제
                </button>
              </div>
            </div>
          </div>
          <div className="content ql-editor">{data.content}</div>
          <div className="btn-wrap">
            <Link to="/board/list" className="list-btn btn btn-type2 medium">
              목록
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Detail;
