import {
  ADDNOTE,
  // DELETENOTE,
  // UPDATENOTE,
  // CHECKUPDATE,
  // REORDERSTATE
} from "../actions/action";

const intialState = {
  notes: [
    {
      title: "Note-1",
      note: "",
      check: false,
    },

    {
      title: "Note-2",
      note: "",
      check: false,
    },
    {
      title: "Note-3",
      note: "",
      check: false,
    },
    {
      title: "Note-4",
      note: "",
      check: false,
    },
    {
      title: "Note-5",
      note: "",
      check: false,
    },
    {
      title: "Note-6",
      note: "",
      check: false,
    },
    {
      title: "Note-7",
      note: "",
      check: false,
    },
    {
      title: "Note-8",
      note: "",
      check: false,
    },
    {
      title: "Note-9",
      note: "",
      check: false,
    }
  ],
  error: null
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
