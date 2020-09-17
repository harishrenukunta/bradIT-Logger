import { ADD_TECH, REMOVE_TECH, GET_TECHS } from '../actions/types';

const initialState = {
    techs: []
}

export default ( state = initialState, action ) => {
    switch(action.type){
        case GET_TECHS: 
            return {
                ...state,
                techs: action.payload
            }
        case ADD_TECH:
            return {
                ...state,
                techs: [ ...state.techs, action.payload]
            }
        case REMOVE_TECH:
            return {
                ...state,
                techs: state.techs.filter( tech => tech.id !== action.payload )
            }        
        default:
            return state;

    }
}