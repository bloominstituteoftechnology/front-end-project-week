const initialState = {
    notes:[]
}


const notesReducer = (state = initialState,action) => {
    switch(action.type){
        case 'CREATE':
            return {notes:state.notes.concat(action.payload)}
        case 'EDIT':
       
            let update = state.notes.map(note => {
                if(note.id == action.payload.id){
                    return {...action.payload}
                }
                return note
            })
            return {notes:update}
        case 'DELETE':
            console.log('Delete action called should remove note #',action.payload)
            let val = state.notes.filter(item => item.id != action.payload)
            console.log(val)
            return {notes:state.notes.filter(item => item.id != action.payload)}
        default:
        return state;
    }

}

export default notesReducer;