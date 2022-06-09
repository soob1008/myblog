import { useEffect } from 'react';
import { useState, useMemo, useRef } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const Editor = (props) => {
    //const QuillElement = useRef();
    //모듈
    // const modules = useMemo(
    //     () => ({
    //       toolbar: {
    //         container: [
    //           ["bold", "italic", "underline", "strike", "blockquote"],
    //           [{ size: ["small", false, "large", "huge"] }, { color: [] }],
    //           [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
    //           ["link","image", "video"],
    //         ],
    //       },
    //     }),
    //     []
    //   );

    const toolbarOptions = [
        ['link', 'image', 'video'],
        [{ header: [1, 2, 3, false] }],
        ['bold', 'italic', 'underline', 'strike'],
        ['blockquote'],
        [{ list: 'ordered' }, { list: 'bullet' }],
        [{ color: [] }, { background: [] }],
        [{ align: [] }],
    ];

    // 옵션에 상응하는 포맷, 추가해주지 않으면 text editor에 적용된 스타일을 볼수 없음
    const formats = [
        'header',
        'font',
        'size',
        'bold',
        'italic',
        'underline',
        'strike',
        'align',
        'blockquote',
        'list',
        'bullet',
        'indent',
        'background',
        'color',
        'link',
        'image',
        'video',
        'width',
    ];

    const modules = {
        toolbar: {
            container: toolbarOptions,
        },
    };

    return (
        <div>
            <ReactQuill
                //ref={QuillElement}
                value={props.content}
                modules={modules}
                formats={formats}
                theme="snow"
                placeholder="내용을 입력해주세요."
                {...props}
            />
        </div>
    );
};

export default Editor;
