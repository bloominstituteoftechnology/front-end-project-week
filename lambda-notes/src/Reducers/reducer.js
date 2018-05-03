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

const reducer = (notes = [], action) => {

    switch (action.type) {
        case GET_NOTES:
            return action.payload;
        case ADD_NOTE:
            // console.log("STATE", notes);
            return notes.concat(action.payload);
        default:
            return notes
    }
}

export default reducer;
