import { CREATE_BOARD, DELETE_BOARD, UPDATE_BOARD, GET_DETAIL_BOARD, GET_ALL_BOARD, GET_MAIN_LIST } from "../actions/types";

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state={}, action) {
    switch(action.type) {
        case CREATE_BOARD: 
            return {
                ...state,
                createSuccess: action.payload
            }
        case DELETE_BOARD:
            return {
                ...state,
                deleteSuccess: action.payload
            }
        case UPDATE_BOARD:
            return {
                ...state,
                updateSuccess: action.payload
            }
        case GET_DETAIL_BOARD: 
            return {
                ...state,
                getDetailSuccess: action.payload
            }
        case GET_ALL_BOARD:
            return {
                ...state,
                getAllSuccess: action.payload
            }
        case GET_MAIN_LIST:
            return {
                ...state,
                getMainSuccess: action.payload
            }
        default:
            return state;
    }
}
