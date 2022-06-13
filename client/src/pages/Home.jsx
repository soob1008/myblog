import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getMainList } from '../actions/board_actions';

const Home = () => {
    const dispatch = useDispatch();

    const [list, setList] = useState();

    useEffect(() => {
        dispatch(getMainList()).then((response) => {
            console.log(response);
            if (response.payload.success) {
                setList(response.payload.boards);
            } else {
                alert('데이터 가져오기 실패');
            }
        });
    }, []);

    return (
        <div className="main">
            <div className="main-visual">
                <h2>Hello! My Blog.</h2>
                <p>I'm subeen, a first-year front-end developer.</p>
            </div>
            <div className="main-content">
                <div className="inner">
                    <h2 className="title large mb0">
                        Project<span className="underline"></span>
                    </h2>
                    <ul className="gallery-list">
                        {list &&
                            list.map((data, idx) => (
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
                                        <Link
                                            to={`/board/detail/${data.shortId}`}
                                        >
                                            {data.title}
                                        </Link>
                                    </h2>
                                    <p>{data.subText}</p>
                                </li>
                            ))}
                    </ul>
                    <div className="btn-wrap">
                        <Link to="/board/list" className="btn btn-type2 large2 radius" >More</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
