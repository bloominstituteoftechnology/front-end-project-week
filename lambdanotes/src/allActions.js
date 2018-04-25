export const ADD_NOTES = 'ADD_NOTES'
export const EDIT_NOTE = 'EDIT_NOTE'



const addNoteActionCreator = (obj)=>{
console.log("obj",obj)

 return {
     type: ADD_NOTES,
     payload:obj,
 }
}



const editNoteActionCreator = (editedNote)=>{
    return {
        type: EDIT_NOTE,
        payload: editedNote
    }
}
export { addNoteActionCreator, editNoteActionCreator}