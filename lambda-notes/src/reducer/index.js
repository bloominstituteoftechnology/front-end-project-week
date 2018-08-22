
const initialState = {
    notes: [
        {
            id: 1, 
            title: "New Note", 
            content: "This is a new note. First note for the note application."
        }, 
        {
            id: 2, 
            title: "React Notes", 
            content: "React is a render library that uses Javasript to build sophisticated UI's. The application is split into components, and each component is rendered individually. "
        }, 
        {
            id: 3, 
            title: "Redux Notes", 
            content: "Redux is a library that can be used with react to centralize all application state in a store. This makes it easier to keep track of state changes across components in large scale applications"
        }
    ], 
    currentNote: ''
}

export const NotesReducer = (state = initialState, action) => {
    switch(action.type){
        case('ADD_NOTE'):
        return { 
            notes: [...state.notes, action.payload],
            currentNote: note
        }
        case('GET_NOTE'):
        let note; 
            for(let x = 0; x < state.notes.length; x++){
                if(state.notes[x].id === action.payload){
                    note = state.notes[x];
                }
            }
        return {
            currentNote: note, 
            notes: [...state.notes, note]
        }
        case('DELETE_NOTE'): 
        let updatedNotes = state.notes.filter(note => note.id !== action.payload); 
        return{
            notes: updatedNotes, 
            currentNote: note
        }
        default: 
        return state; 
    }
}