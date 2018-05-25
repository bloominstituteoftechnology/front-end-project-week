import {
  ADDNOTE,
  EDITNOTE,
  DELETENOTE,
  UPDATENOTE,
  CHECKUPDATE,
  REORDERSTATE
} from "../actions/action";

const intialState = {
  notes: [
    {
      title: "Note-1",
      note:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at maximus nisi, ut pulvinar odio. Duis faucibus nisl pien auctor vulputate. Aenean ullamcorper viverra est, in iaculis lacus feugiat nec. Aenean volutpat, urna non imperdiet ullamcorper, orci mi consequat ex, vitae ullamcorper nisi risus quis odio. Etiam interdum tellus gittis interdum. Morbi vel felis arcu. Phasellus eu ex nulla. Nullam ultrices velit ismod bibendum.",
      check: false,
      
    },

    {
      title: "Note-2",
      note:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at maximus nisi, ut pulvinar odio. Duis faucibus nisl pien auctor vulputate. Aenean ullamcorper viverra est, in iaculis lacus feugiat nec. Aenean volutpat, urna non imperdiet ullamcorper, orci mi consequat ex, vitae ullamcorper nisi risus quis odio. Etiam interdum tellus gittis interdum. Morbi vel felis arcu. Phasellus eu ex nulla. Nullam ultrices velit ismod bibendum.",
      check: false,
      
    },
    {
      title: "Note-3",
      note:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at maximus nisi, ut pulvinar odio. Duis faucibus nisl pien auctor vulputate. Aenean ullamcorper viverra est, in iaculis lacus feugiat nec. Aenean volutpat, urna non imperdiet ullamcorper, orci mi consequat ex, vitae ullamcorper nisi risus quis odio. Etiam interdum tellus gittis interdum. Morbi vel felis arcu. Phasellus eu ex nulla. Nullam ultrices velit ismod bibendum.",
      check: false,
      
    },
    {
      title: "Note-4",
      note:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at maximus nisi, ut pulvinar odio. Duis faucibus nisl pien auctor vulputate. Aenean ullamcorper viverra est, in iaculis lacus feugiat nec. Aenean volutpat, urna non imperdiet ullamcorper, orci mi consequat ex, vitae ullamcorper nisi risus quis odio. Etiam interdum tellus gittis interdum. Morbi vel felis arcu. Phasellus eu ex nulla. Nullam ultrices velit ismod bibendum.",
      check: false,
      
    },
    {
      title: "Note-5",
      note:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at maximus nisi, ut pulvinar odio. Duis faucibus nisl pien auctor vulputate. Aenean ullamcorper viverra est, in iaculis lacus feugiat nec. Aenean volutpat, urna non imperdiet ullamcorper, orci mi consequat ex, vitae ullamcorper nisi risus quis odio. Etiam interdum tellus gittis interdum. Morbi vel felis arcu. Phasellus eu ex nulla. Nullam ultrices velit ismod bibendum.",
      check: false,
      
    },
    {
      title: "Note-6",
      note:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at maximus nisi, ut pulvinar odio. Duis faucibus nisl pien auctor vulputate. Aenean ullamcorper viverra est, in iaculis lacus feugiat nec. Aenean volutpat, urna non imperdiet ullamcorper, orci mi consequat ex, vitae ullamcorper nisi risus quis odio. Etiam interdum tellus gittis interdum. Morbi vel felis arcu. Phasellus eu ex nulla. Nullam ultrices velit ismod bibendum.",
      check: false,
      
    },
    {
      title: "Note-7",
      note:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at maximus nisi, ut pulvinar odio. Duis faucibus nisl pien auctor vulputate. Aenean ullamcorper viverra est, in iaculis lacus feugiat nec. Aenean volutpat, urna non imperdiet ullamcorper, orci mi consequat ex, vitae ullamcorper nisi risus quis odio. Etiam interdum tellus gittis interdum. Morbi vel felis arcu. Phasellus eu ex nulla. Nullam ultrices velit ismod bibendum.",
      check: false,
      
    },
    {
      title: "Note-8",
      note:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at maximus nisi, ut pulvinar odio. Duis faucibus nisl pien auctor vulputate. Aenean ullamcorper viverra est, in iaculis lacus feugiat nec. Aenean volutpat, urna non imperdiet ullamcorper, orci mi consequat ex, vitae ullamcorper nisi risus quis odio. Etiam interdum tellus gittis interdum. Morbi vel felis arcu. Phasellus eu ex nulla. Nullam ultrices velit ismod bibendum.",
      check: false,
      
    },
    {
      title: "Note-9",
      note:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at maximus nisi, ut pulvinar odio. Duis faucibus nisl pien auctor vulputate. Aenean ullamcorper viverra est, in iaculis lacus feugiat nec. Aenean volutpat, urna non imperdiet ullamcorper, orci mi consequat ex, vitae ullamcorper nisi risus quis odio. Etiam interdum tellus gittis interdum. Morbi vel felis arcu. Phasellus eu ex nulla. Nullam ultrices velit ismod bibendum.",
      check: false,
      
    }
  ]
};

export const notesReducer = (state = intialState, action) => {
  switch (action.type) {
    case ADDNOTE:
      return {
        ...state,
        notes: [...state.notes.concat(action.payload)]
      };
      case EDITNOTE:
            return {...state, notes: state.notes[action.payload] = action.note}

    case UPDATENOTE:
      return {
        ...state,
        notes: [
          (state.notes[action.index].note = action.payload),
          (state.notes[action.index].title = action.title)
        ],
      };
    case DELETENOTE:
      return {
        ...state,
        notes: [...state.notes.filter(note => note !== action.payload)]
      };
    case CHECKUPDATE:
      return {
        ...state,
        notes: [(state.notes[action.index].check = action.payload)]
      };
    case REORDERSTATE:
      return {
        ...state,
        notes: [action.payload]
      };
    default:
      return state;
  }
};
