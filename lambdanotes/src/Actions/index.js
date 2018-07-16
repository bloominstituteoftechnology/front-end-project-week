export const NEW_NOTE = "NEW_NOTE"

export const newNote = note => {
    
        console.log(note)
        return {type: NEW_NOTE, payload: note };
    
};


export function getNotes() {

}