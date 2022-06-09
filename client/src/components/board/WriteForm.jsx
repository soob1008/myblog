import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    createBoard,
    updateBoard,
    getDetailBoard,
} from '../../actions/board_actions';
import Axios from 'axios';
import Editor from './Editor';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const WriteForm = (props) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { shortId } = useParams();

    const CATEGORYS = [
        { value: 'project', name: 'project' },
        { value: 'practice', name: 'practice' },
    ];

    const TAGS = [
        { value: 'web', name: 'web' },
        { value: 'app', name: 'app' },
    ];

    //input
    const [inputs, setInputs] = useState({});
    const [Thumbnail, setThumbnail] = useState();
    const [Title, setTitle] = useState();
    const [SubText, setSubText] = useState();
    const [Content, setContent] = useState('');
    const [Tag, setTag] = useState(TAGS[0].value);
    const [Cate, setCate] = useState(CATEGORYS[0].value);
    const [Date, setDate] = useState();

    useEffect(() => {
        // updateBoard 기본 값 가져오기

        if (props.isEdit) {
            dispatch(getDetailBoard(inputs, shortId)).then((response) => {
                const board = response.payload.board;
                if (response.payload.success) {
                    setThumbnail(board.thumbnail);
                    setTitle(board.title);
                    setSubText(board.subText);
                    setContent(board.content);
                    setTag(board.tag);
                    setCate(board.category);
                    setDate(board.date);
                } else {
                    alert('데이터를 불러오지 못했습니다.');
                }
            });
        }
    }, []);

    //handler
    const onFileHandler = (e) => {
        //서버 api post 요청
        const formData = new FormData();
        formData.append('thumbnail', e.target.files[0]);

        Axios.post('/api/board/upload', formData, {
            header: { 'content-type': 'multipart/form-data' },
        }).then((response) => {
            setThumbnail(response.data.fileName);
        });
    };

    const onTitleHandler = (e) => {
        setTitle(e.target.value);
    };

    const onSubTextHandler = (e) => {
        setSubText(e.target.value);
    };

    const onTagHandler = (e) => {
        setTag(e.target.value);
    };

    const onCateHandler = (e) => {
        setCate(e.target.value);
    };

    const onDateHandler = (e) => {
        setDate(e.target.value);
    };

    //form submit
    const onSubmitHandler = (e) => {
        e.preventDefault();

        let body = {
            thumbnail: Thumbnail,
            title: Title,
            subText: SubText,
            content: Content,
            tag: Tag,
            category: Cate,
            date: Date,
        };

        if (props.isEdit) {
            dispatch(updateBoard(body, shortId)).then((response) => {
                if (response.payload.success) {
                    alert('글 수정이 완료되었습니다.');
                    navigate('/board/detail/' + shortId);
                } else {
                    alert('글 수정에 실패했습니다.');
                }
            });
        } else {
            dispatch(createBoard(body)).then((response) => {
                if (response.payload.success) {
                    alert('글 작성이 완료되었습니다.');
                    navigate('/board/list');
                } else {
                    alert('글 작성에 실패했습니다.');
                }
            });
        }
    };

    return (
        <form encType="multipart/form-data" onSubmit={onSubmitHandler}>
            <div className="write-inputs">
                <div className="input">
                    <label htmlFor="" className="sr-only">
                        Thumbnail
                    </label>
                    <input
                        type="file"
                        name="thumbnail"
                        required
                        onChange={onFileHandler}
                    />
                </div>
                <div className="input input-type1 w100">
                    <input
                        type="text"
                        name="title"
                        value={Title || ''}
                        onChange={onTitleHandler}
                        placeholder="제목"
                    />
                </div>
                <div className="input input-type1 w100">
                    <input
                        type="text"
                        name="subText"
                        value={SubText || ''}
                        onChange={onSubTextHandler}
                        placeholder="요약 설명"
                    />
                </div>
                <div className="select select-type1 w100">
                    <select
                        name="cate"
                        key={Cate}
                        defaultValue={Cate}
                        onChange={onCateHandler}
                    >
                        {CATEGORYS.map((opt, idx) => (
                            <option
                                key={idx}
                                value={opt.value}
                                defaultValue={opt.defaultValue === opt.value}
                            >
                                {opt.name}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="select select-type1 w100">
                    <select
                        name="tag"
                        key={Tag}
                        defaultValue={Tag}
                        onChange={onTagHandler}
                    >
                        {TAGS.map((opt, idx) => (
                            <option
                                key={idx}
                                value={opt.value}
                                defaultValue={opt.defaultValue === opt.value}
                            >
                                {opt.name}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="input input-type1 w100">
                    <input
                        type="text"
                        name="date"
                        value={Date || ''}
                        placeholder="기간"
                        onChange={onDateHandler}
                    />
                </div>
            </div>
            <Editor
                content={Content}
                onChange={(content, delta, source, editor) => {
                    /* 
                        바로 실행이 되어 한글 입력이 제대로 되지 않음. 
                        setTimeout으로 처리했지만 더 좋은 방안이 있는지 찾아볼 필요가 있음
                    */
                    setTimeout(() => {
                        setContent(editor.getHTML());
                    }, 1000);
                }}
            />

            <div className="btn-wrap">
                <button className="btn btn-type1 medium radius">
                    {props.isEdit ? '수정' : '작성'}
                </button>
            </div>
        </form>
    );
};

export default WriteForm;
