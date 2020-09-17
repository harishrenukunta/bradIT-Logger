import { GET_LOGS, REMOVE_LOG, EDIT_LOG, SET_LOADING, LOG_ERROR, ADD_LOG, SET_CURRENT, CLEAR_CURRENT, SEARCH_LOG } from './types';


//Get Logs from Server
export const getLogs = () => async (dispatch) => {
    try {
        setLoading();
        const res = await fetch('/logs');
        const data = await res.json();
        dispatch({type: GET_LOGS, payload: data});    
    } catch (err) {
        console.log('Error when get logs:' + err.response.data);
        dispatch({type: LOG_ERROR, payload: err.response.data});
    }
}

//Search server logs
export const searchLog = ( text ) => async dispatch => {
    try {
        const res = await fetch( `/logs?q=${text}`, {
            'method': 'GET',
            'headers': {
                'Content-Type': 'application/json'
            }
        });
        const data = await res.json();
        dispatch({ type: SEARCH_LOG, payload: data});
        
    } catch (error) {
        dispatch(
            {
                type: LOG_ERROR,
                payload: error.response.data
            }
        )
    }
    
}

//add log
export const addLog = ( logData ) => async (dispatch) => {
    try {
    
        const res = await fetch('/logs', {
            method:'POST',
            headers : {'Content-Type': 'application/json'},
            body: JSON.stringify(logData)
        });
        const data = await res.json();
        dispatch({type: ADD_LOG, payload: data})
        
    }catch(err){
        dispatch({type: LOG_ERROR, payload: err.response.data});
    }
}

//update Log
export const updateLog = ( log ) => async ( dispatch ) => {
    console.log('Inside update log');
    console.dir(log);
    const logData = {
        message: log.message,
        attention: log.attention,
        tech: log.tech,
        date: log.date
    }

    try{
        const res = await fetch(`/logs/${log.id}`, {
                    'method': 'PUT',
                    'headers': {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(logData)
                })
        const data = await res.json();
        dispatch({type: EDIT_LOG, payload: data});
    }catch(err){
        dispatch({
            type: LOG_ERROR,
            payload: err.response.data
        })
    }
}

export const deleteLog = (id) => async (dispatch) => {
    try {
        await fetch(`/logs/${id}`,{
            method: 'delete'
        })
        dispatch({type: REMOVE_LOG, payload: id});
    } catch (err) {
        dispatch({type: LOG_ERROR, payload: err.response.data});
    }
}

export const setCurrent = ( log ) => {
    return ({type: SET_CURRENT, payload: log});
}

export const clearCurrent = ( ) => ({ type: CLEAR_CURRENT });

//Set loading to true
export const setLoading = () => {
    return {
        type: SET_LOADING
    }
}

