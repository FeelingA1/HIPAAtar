import axios from 'axios';
import {GET_QUIZZES, DELETE_QUIZ, CREATE_QUIZ, GET_QUIZ} from './types';
import returnErrors from './messages';
//HOME
export const getQuizzes = () => dispatch => {
    axios.get('/api/quiz').then(res => {
        dispatch({
            type: GET_QUIZZES,
            payload: res.data
        });
    }).catch(err => dispatch(
        returnErrors(err.response.data, err.response.status)
    ));
}

export const deleteQuiz = (id) => dispatch => {
    axios.delete('/api/quiz', null, { params : {id}}).then(res => {
        dispatch({
            type: DELETE_QUIZ,
            payload: res.data
        });
    }).catch(err => console.log(err));
}


export const createQuiz = (data) => dispatch => {
    axios.post('/api/quiz', data, null).then(res => {
        dispatch({
            type: CREATE_QUIZ,
            payload: res.data
        });
    }).catch(err => console.log(err));
}