import React, { useEffect, useState, useCallback } from 'react';
import Layout from '../../components/Base/Layout';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getListBoard } from '../../actions/board_actions';

const List = () => {
    const dispatch = useDispatch();

    const [list, setList] = useState([]);
    const [cate, setCate] = useState('all');

    useEffect(() => {
        dispatch(getListBoard()).then((response) => {
            if (response.payload.success) {
                setList(response.payload.boards);
            } else {
                alert('데이터 가져오기 실패');
            }
        });
    }, []);

    return (
        <Layout>
            <div className="inner">
                <div className="sub">
                    <h2 className="title large">
                        Project<span className="underline"></span>
                    </h2>
                    <ul className="brd-filter">
                        {/* <li>
                            <button
                                type="button"
                                // onClick={onCategoryHandler('all')}
                            >
                                All
                            </button>
                        </li>
                        <li>
                            <button type="button">Project</button>
                        </li>
                        <li>
                            <button type="button">Practice</button>
                        </li> */}
                    </ul>
                    <div className="list-btns">
                        <Link
                            to="/board/write"
                            className="btn btn-type2 medium"
                        >
                            작성
                        </Link>
                    </div>
                    <ul className="gallery-list">
                        {list.map((data, idx) => (
                            <li key={data._id}>
                                <Link
                                    to={`/board/detail/${data.shortId}`}
                                    className="thumbnail"
                                >
                                    <img
                                        src={'/uploads/' + data.thumbnail}
                                        alt=""
                                    />
                                </Link>
                                <div className="label">
                                    <span>{data.tag}</span>
                                    <span>{data.date}</span>
                                </div>
                                <h2>
                                    <Link to={`/board/detail/${data.shortId}`}>
                                        {data.title}
                                    </Link>
                                </h2>
                                <p>{data.subText}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </Layout>
    );
};

export default List;
