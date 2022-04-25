import { GET_QUIZZES } from "../actions/types.js";

const initialState = {
    quizzes: []
};

export default function (state = initialState, action){
    switch(action.type){
        case GET_QUIZZES:
            return{
                ...state,
                quizzes: action.payload
            }
        default:
            return state;
    }
}