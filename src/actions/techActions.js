import { ADD_TECH, LOG_ERROR, GET_TECHS, REMOVE_TECH } from "./types";

export const getTechs = () => async dispatch => {
    try {
        console.log('getTechs inside');
        const res = await fetch('/techs', {
            'method': 'GET',
            'headers': {
                'Content-Type': 'application/json'
            }
        });
        const data = await res.json();
        console.dir(data)
        dispatch({
            type: GET_TECHS,
            payload: data
        })
    } catch (err) {
        dispatch({
            type: LOG_ERROR,
            payload: err.response.data
        })
    }
}

export const addTech = ( tech ) => async dispatch => {
    try {
        const res = await fetch('/techs', {
            'method': 'POST',
            'headers': {
                'Content-Type': 'application/json'
            },
            'body': JSON.stringify(tech)
        });
        const data = await res.json();
        dispatch( {
            type: ADD_TECH,
            payload: data
        }); 
    } catch (err) {
        dispatch({
            type: LOG_ERROR,
            payload: err.response.data
        })
        
    }
}

export const removeTech = ( id ) => async dispatch => {
    try {
        await fetch( `/techs/${id}`, {
            'method': 'DELETE'
        });
        dispatch({
            type: REMOVE_TECH,
            payload: id
        })   
    } catch (err) {
        dispatch({
            type: LOG_ERROR,
            payload: err.response.data
        })
    }
}
  