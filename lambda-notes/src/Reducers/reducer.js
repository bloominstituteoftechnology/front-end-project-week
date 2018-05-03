import { ADD_NOTE, GET_NOTES } from '../Actions/index'

const initialState = {
    notes : []

    //each note object

    // { title: '',
    // content: '',
    // id: 0,
    // edited: false,
    // deleted: false }

}

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case GET_NOTES:
            return action.payload;
        case ADD_NOTE:
            console.log("STATE", state);
            return initialState.notes.concat(action.payload);
        default:
            return state
    }
}

export default reducer;
