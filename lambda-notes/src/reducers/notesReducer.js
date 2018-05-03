const initialState = {
    notes:[]
}


const notesReducer = (state = initialState,action) => {
    switch(action.type){
        case 'CREATE':
            console.log(action.payload)
            return {notes:state.notes.concat(action.payload)}
        default:
        return state;
    }

}

export default notesReducer;