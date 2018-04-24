export const ADD_NOTES = 'ADD_NOTES'




const addNoteActionCreator = (note)=>{
 return {
     type: ADD_NOTES,
     payload:note,
 }
}
export {addNoteActionCreator}