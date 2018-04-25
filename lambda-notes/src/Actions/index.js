export const  NEW_NOTE = "NEW_NOTE";
export const FETCH_NOTE = "FETCH_NOTE"

export const newNote = note => {
    return {type: NEW_NOTE, payload: note };
};

export const fetchNote = index => {
    return {type: FETCH_NOTE}
}

// export function getNotes() {
// }