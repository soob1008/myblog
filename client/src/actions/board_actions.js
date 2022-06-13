import Axios from 'axios';
import {
    CREATE_BOARD,
    DELETE_BOARD,
    UPDATE_BOARD,
    GET_DETAIL_BOARD,
    GET_ALL_BOARD,
    GET_MAIN_LIST,
} from './types';

//글 생성
export function createBoard(data) {
    const request = Axios.post('/api/board/create', data).then(
        (response) => response.data
    );
    return {
        type: CREATE_BOARD,
        payload: request,
    };
}

//글 삭제
export function deleteBoard(data, id) {
    const request = Axios.post(`/api/board/delete/${id}`, data).then(
        (response) => response.data
    );
    return {
        type: DELETE_BOARD,
        payload: request,
    };
}

//글 수정
export function updateBoard(data, id) {
    const request = Axios.post(`/api/board/update/${id}`, data).then(
        (response) => response.data
    );
    return {
        type: UPDATE_BOARD,
        payload: request,
    };
}

//특정 게시물 가져오기
export function getDetailBoard(data, id) {
    const request = Axios.get(`/api/board/getDetail/${id}`).then(
        (response) => response.data
    );
    return {
        type: GET_DETAIL_BOARD,
        payload: request,
    };
}

//모든 게시물 가져오기
export function getListBoard(data) {
    const request = Axios.get('/api/board/getList').then(
        (response) => response.data
    );
    return {
        type: GET_ALL_BOARD,
        payload: request,
    };
}

//메인 게시물 가져오기
export function getMainList(data) {
    const request = Axios.get('/api/board/getMainList').then(
        (response) => response.data
    );

    return {
        type: GET_MAIN_LIST,
        payload: request,
    };
}
