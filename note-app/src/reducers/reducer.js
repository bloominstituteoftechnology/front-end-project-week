import {
  ADDNOTE,
  // DELETENOTE,
  // UPDATENOTE,
  // CHECKUPDATE,
  // REORDERSTATE
} from "../actions/action";

const intialState = {
};

export const notesReducer = (state = intialState, action) => {
  switch (action.type) {
    case ADDNOTE:
      return {
        ...state,
        notes: [...state.notes.concat(action.payload)]
      };

    // case UPDATENOTE:
    //   return {
    //     ...state,
    //     notes: [
    //       (state.notes[action.index].note = action.payload),
    //       (state.notes[action.index].title = action.title)
    //     ],
    //     notes: [...state.notes]
    //   };
    // case DELETENOTE:
    //   return {
    //     ...state,
    //     notes: [...state.notes.filter(note => note !== action.payload)]
    //   };
    // case CHECKUPDATE:
    //   return {
    //     ...state,
    //     notes: [(state.notes[action.index].check = action.payload)],
    //     notes: [...state.notes]
    //   };
    // case REORDERSTATE:
    //   return {
    //     ...state,
    //     notes: [action.payload]
    //   };
  }
};
