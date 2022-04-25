import { CREATE_MESSAGE } from "./types";

export const createMessafe = msg =>{
    return {
        type: CREATE_MESSAGE,
        payload: msg
    };
};


export const returnErrors =(msg, status) => {
    return {
        type: GET_ERRORS,
        payload: {msg, status}
    };
};