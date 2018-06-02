const initialState = [];
const notesReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'stuff':
            return state;
        default:
            return state;
    }
}

export default notesReducer;