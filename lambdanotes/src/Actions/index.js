export const NEW_NOTE = "NEW_NOTE";
export const DELETE_NOTE = "FETCH_NOTE";

export const newNote = note => {
    
        console.log(note)
        return {type: NEW_NOTE, payload: note };
    
};


export const deleteNote = index => {
    return {type: DELETE_NOTE, payload: index}
}


// export function getNotes() {

// }