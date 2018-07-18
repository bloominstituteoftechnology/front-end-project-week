
import types from './types';


const initialState = {
    darkTheme: false,
}

const sidebarReducer = (state = initialState, action) => {

    switch (action.type) {
        case types.TOGGLE_THEME:
        return {
            ...state,
            darkTheme: !state.darkTheme
        }
        default:
        return state;
    }
}


export default sidebarReducer;