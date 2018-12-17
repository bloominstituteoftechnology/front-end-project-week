import {
  ADDNOTE,
  EDITNOTE,
  DELETENOTE,
  UPDATENOTE,
  ADDTAG,
  CHECKUPDATE,
  REORDERSTATE
} from "../actions/action";

const intialState = {
  notes: [
    {
      title: "Note 1",
      note:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at maximus nisi, ut pulvinar odio. Duis faucibus nisl pien auctor vulputate. Aenean ullamcorper viverra est, in iaculis lacus feugiat nec. Aenean volutpat, urna non imperdiet ullamcorper, orci mi consequat ex, vitae ullamcorper nisi risus quis odio. Etiam interdum tellus gittis interdum. Morbi vel felis arcu. Phasellus eu ex nulla. Nullam ultrices velit ismod bibendum.",
      check: false,
      tag: ""
    },

    {
      title: "Note 2",
      note:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at maximus nisi, ut pulvinar odio. Duis faucibus nisl pien auctor vulputate. Aenean ullamcorper viverra est, in iaculis lacus feugiat nec. Aenean volutpat, urna non imperdiet ullamcorper, orci mi consequat ex, vitae ullamcorper nisi risus quis odio. Etiam interdum tellus gittis interdum. Morbi vel felis arcu. Phasellus eu ex nulla. Nullam ultrices velit ismod bibendum.",
      check: false,
      tag: ""
    },
    {
      title: "Note 3",
      note:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at maximus nisi, ut pulvinar odio. Duis faucibus nisl pien auctor vulputate. Aenean ullamcorper viverra est, in iaculis lacus feugiat nec. Aenean volutpat, urna non imperdiet ullamcorper, orci mi consequat ex, vitae ullamcorper nisi risus quis odio. Etiam interdum tellus gittis interdum. Morbi vel felis arcu. Phasellus eu ex nulla. Nullam ultrices velit ismod bibendum.",
      check: false,
      tag: ""
    },
    {
      title: "Note 4",
      note:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at maximus nisi, ut pulvinar odio. Duis faucibus nisl pien auctor vulputate. Aenean ullamcorper viverra est, in iaculis lacus feugiat nec. Aenean volutpat, urna non imperdiet ullamcorper, orci mi consequat ex, vitae ullamcorper nisi risus quis odio. Etiam interdum tellus gittis interdum. Morbi vel felis arcu. Phasellus eu ex nulla. Nullam ultrices velit ismod bibendum.",
      check: false,
      tag: ""
    },
    {
      title: "Note 5",
      note:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at maximus nisi, ut pulvinar odio. Duis faucibus nisl pien auctor vulputate. Aenean ullamcorper viverra est, in iaculis lacus feugiat nec. Aenean volutpat, urna non imperdiet ullamcorper, orci mi consequat ex, vitae ullamcorper nisi risus quis odio. Etiam interdum tellus gittis interdum. Morbi vel felis arcu. Phasellus eu ex nulla. Nullam ultrices velit ismod bibendum.",
      check: false,
      tag: ""
    },
    {
      title: "Note 6",
      note:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at maximus nisi, ut pulvinar odio. Duis faucibus nisl pien auctor vulputate. Aenean ullamcorper viverra est, in iaculis lacus feugiat nec. Aenean volutpat, urna non imperdiet ullamcorper, orci mi consequat ex, vitae ullamcorper nisi risus quis odio. Etiam interdum tellus gittis interdum. Morbi vel felis arcu. Phasellus eu ex nulla. Nullam ultrices velit ismod bibendum.",
      check: false,
      tag: ""
    },
    {
      title: "Note 7",
      note:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at maximus nisi, ut pulvinar odio. Duis faucibus nisl pien auctor vulputate. Aenean ullamcorper viverra est, in iaculis lacus feugiat nec. Aenean volutpat, urna non imperdiet ullamcorper, orci mi consequat ex, vitae ullamcorper nisi risus quis odio. Etiam interdum tellus gittis interdum. Morbi vel felis arcu. Phasellus eu ex nulla. Nullam ultrices velit ismod bibendum.",
      check: false,
      tag: ""
    },
    {
      title: "Note 8",
      note:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at maximus nisi, ut pulvinar odio. Duis faucibus nisl pien auctor vulputate. Aenean ullamcorper viverra est, in iaculis lacus feugiat nec. Aenean volutpat, urna non imperdiet ullamcorper, orci mi consequat ex, vitae ullamcorper nisi risus quis odio. Etiam interdum tellus gittis interdum. Morbi vel felis arcu. Phasellus eu ex nulla. Nullam ultrices velit ismod bibendum.",
      check: false,
      tag: ""
    },
    {
      title: "Note 9",
      note:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at maximus nisi, ut pulvinar odio. Duis faucibus nisl pien auctor vulputate. Aenean ullamcorper viverra est, in iaculis lacus feugiat nec. Aenean volutpat, urna non imperdiet ullamcorper, orci mi consequat ex, vitae ullamcorper nisi risus quis odio. Etiam interdum tellus gittis interdum. Morbi vel felis arcu. Phasellus eu ex nulla. Nullam ultrices velit ismod bibendum.",
      check: false,
      tag: ""
    }
  ],
  error: null
};

export const notesReducer = (state = intialState, action) => {
  switch (action.type) {
    case ADDNOTE:
      return Object.assign({}, state, {
        notes: [...state.notes.concat(action.payload)]
      });
    case UPDATENOTE:
      return Object.assign({}, state, {
        notes: [
          (state.notes[action.index].note = action.payload),
          (state.notes[action.index].title = action.title)
        ],
        notes: [...state.notes]
      });

    case DELETENOTE:
      return Object.assign({}, state, {
        notes: [...state.notes.filter(note => note !== action.payload)]
      });
    case CHECKUPDATE:
      return Object.assign({}, state, {
        notes: [(state.notes[action.index].check = action.payload)],
        notes: [...state.notes]
      });
    case ADDTAG:
      return Object.assign({}, state, {
        notes: [
          ...state.notes,
          (state.notes[action.index].tag = action.payload)
        ]
      });
    case REORDERSTATE:
      return Object.assign({}, state, {
        notes: [...action.payload]
      });
    default:
      return state;
  }
};
