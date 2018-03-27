

const noteState = { // main storage
    Notes: [
    {
      id: 1,
      title: "Note Title #1",
      meat: "Welcome to Lambda School's front-end-project"
    },
    {
     id: 2,
     title: "Note Title #2",
     meat: "This front-end-project will be written in JavaScript"
   },
   {
     id: 3,
     title: "Note Title #3",
     meat: "With React and Redux and less"
   },
   {
     id: 4,
     title: "Note Title #4",
     meat: "It will have CSS styling"
   },
   {
     id: 5,
     title: "Note Title #5",
     meat: "The project will display a list of notes and their content"
   },
   {
     id: 6,
     title: "Note Title #6",
     meat: "The project will have cool extra features"
   },				 
  //  error: false,
	 ]			 
  }
  
  const notes = (state = noteState, action) => {
    switch (action.type) {
      case 'ADD_NOTE':
        return {
          ...state,
          MESSAGE: 'added the note',
          Notes: {...state.Notes, [action.payload.title]: action.payload}, // has to be in brackets because it's coming in as a string (I think)
        
        }
        case 'EDIT_NOTE':
        let tempObj = {
          ...state,
          MESSAGE: 'edited the note',
          Notes: {...state.Notes, [action.payload.title]: action.payload},
        }
        if (action.payload.title !== action.payload.oldtitle) {
          delete tempObj.Notes[action.payload.oldtitle]
          console.log('edited');
        }
        return tempObj;
      case 'DELETE_NOTE':
        let delObj = {
          ...state,
          MESSAGE: 'deleted the note',
          Notes: {...state.Notes},
        }
        delete delObj.Notes[action.payload];
        console.log('deleted');
        return delObj;
      default:
        return state;
    }
  }
  
  export default notes;
