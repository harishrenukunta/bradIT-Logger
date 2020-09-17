import { GET_LOGS, LOG_ERROR, REMOVE_LOG, EDIT_LOG, SET_LOADING, ADD_LOG,
    SET_CURRENT, CLEAR_CURRENT, SEARCH_LOG
 } from '../actions/types';
const initialState = {
    logs: null,
    loading: false,
    error: '',
    current: null
}

export default (state = initialState, action ) => {

    switch(action.type){
        case SET_LOADING:
            return {
                ...state,
                loading: true
            }
        case GET_LOGS:
            return {
                ...state,
                logs: action.payload,
                loading: false
            }
        case SEARCH_LOG:
            return {
                ...state,
                logs: action.payload,
                loading: false
            }    
        case ADD_LOG:   
            return {
                ...state,
                logs: [...state.logs, action.payload]
            }
        case EDIT_LOG:
            return {
                ...state,
                logs: state.logs.map( log => (log.id !== action.payload.id) ? log : action.payload)
            }    
        case REMOVE_LOG: 
            return {
                ...state,
                logs: state.logs.filter( log => log.id !== action.payload),
                loading: false
            }        
        case LOG_ERROR:
            return {
                ...state,
                error: action.payload
            }    
        case SET_CURRENT:
            return {
                ...state,
                current: action.payload
            }    
        case CLEAR_CURRENT:
            return {
                ...state,
                current: null
            }    
        default:
            return state;
    }
}