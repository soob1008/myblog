import { LOGIN_USER, JOIN_USER, AUTH_USER } from "../actions/types";

//Action type에 따라 변화된 state 반환
// eslint-disable-next-line import/no-anonymous-default-export
export default function (state= {}, action) {
    switch (action.type) {
        case LOGIN_USER:
            return {
                ...state,
                loginSuccess: action.payload
            }
        case JOIN_USER:
            return {
                ...state, 
                joinSuccess: action.payload
            }
        case AUTH_USER:
            return {
                ...state,
                userData: action.payload
            }
        default: //state가 들어오지 않았을 경우 전의 state를 넣어줌
            return state;
    }
}