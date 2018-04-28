export const ADD_NOTES = 'ADD_NOTES'
export const EDIT_NOTE = 'EDIT_NOTE'
export const FILTERED_NOTE = 'FILTERED_NOTE'


const addNoteActionCreator = (obj)=>{
console.log("obj",obj)

// if(obj.title === "" || obj.text === ""){
//     return {
//         type: ADD_NOTES,
//         payload:'',
//     }
//  }


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
const filterNotesActionCreator = (filteredNote) =>{
   console.log('f',filteredNote)
    return { 
        type: FILTERED_NOTE,
        payload: filteredNote

    }
}


export { addNoteActionCreator, editNoteActionCreator, filterNotesActionCreator}