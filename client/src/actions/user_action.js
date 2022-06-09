/*
    action creator
    dispatch에 action을 보내주기 위해 action 객체를 return 해주는 함수 작성
    ('/api/user/login' 서버에 데이터를 보낸후, 서버에서 온 데이터를 저장하도록 함.)
*/

import Axios from 'axios';
import { LOGIN_USER, JOIN_USER, AUTH_USER } from './types';

//login
export function loginUser(dataSubmit) {
    const request = Axios.post('/api/users/login', dataSubmit).then(
        (response) => response.data
    );
    //redux의 action -> 이를 dispatch 통해 reducer로 보냄
    return {
        type: LOGIN_USER,
        payload: request,
    };
}

//join
export function joinUser(dataSubmit) {
    const request = Axios.post('/api/users/join', dataSubmit).then(
        (response) => response.data
    );

    return {
        type: JOIN_USER,
        payload: request,
    };
}

//auth
export function auth() {
    const request = Axios.get('/api/users/auth').then(
        (response) => response.data
    );
    return {
        type: AUTH_USER,
        payload: request,
    };
}
