export const CREATE_NOTE = "CREATE_NOTE";
export const EDIT_NOTE = "EDIT_NOTE";
export const DELETE_NOTE = "DELETE_NOTE";

let ls = JSON.parse(localStorage.getItem('array'))

const greatestId = obj => {
    if(obj !== null){
        return obj.reduce((greatest, item) => {
            return item.id > greatest ? item.id : greatest;
        }, 0);
    } else {
        return 3
    }
};

let noteId = parseInt(greatestId(ls))

export const createNote = note => {
    console.log(ls, noteId)
  noteId += 1;
  return {
    type: CREATE_NOTE,
    payload: {
      id: noteId,
      title: note.title,
      content: note.content
    }
  };
};

export const editNote = note => {
    return {
        type: EDIT_NOTE,
        payload: note
    }
}

export const deleteNote = id => {
  return {
    type: DELETE_NOTE,
    payload: id
  };
};
