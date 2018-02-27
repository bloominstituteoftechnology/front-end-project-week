import * as actions from '../actions/index';

const initialState = {
  notes: [
    {
      id: 0,
      title: 'Yup',
      body:
        "Wubba Lubba Dub-Dub is Rick's catchphrase, which he recurrently uses in the show, mostly in season one. He uses this phrase every time he's happy or makes a joke.Wubba Lubba Dub-Dub is Rick's catchphrase, which he recurrently uses in the show, mostly in season one. He uses this phrase every time he's happy or makes a joke.",
    },
    {
      id: 1,
      title: 'Yup',
      body:
        "Wubba Lubba Dub-Dub is Rick's catchphrase, which he recurrently uses in the show, mostly in season one. He uses this phrase every time he's happy or makes a joke.Wubba Lubba Dub-Dub is Rick's catchphrase, which he recurrently uses in the show, mostly in season one. He uses this phrase every time he's happy or makes a joke.",
    },
    {
      id: 2,
      title: 'Yup',
      body:
        "Wubba Lubba Dub-Dub is Rick's catchphrase, which he recurrently uses in the show, mostly in season one. He uses this phrase every time he's happy or makes a joke.Wubba Lubba Dub-Dub is Rick's catchphrase, which he recurrently uses in the show, mostly in season one. He uses this phrase every time he's happy or makes a joke.",
    },
    {
      id: 3,
      title: 'Yup',
      body:
        "Wubba Lubba Dub-Dub is Rick's catchphrase, which he recurrently uses in the show, mostly in season one. He uses this phrase every time he's happy or makes a joke.Wubba Lubba Dub-Dub is Rick's catchphrase, which he recurrently uses in the show, mostly in season one. He uses this phrase every time he's happy or makes a joke.",
    },
    {
      id: 4,
      title: 'Yup',
      body:
        "Wubba Lubba Dub-Dub is Rick's catchphrase, which he recurrently uses in the show, mostly in season one. He uses this phrase every time he's happy or makes a joke.Wubba Lubba Dub-Dub is Rick's catchphrase, which he recurrently uses in the show, mostly in season one. He uses this phrase every time he's happy or makes a joke.",
    },
    {
      id: 5,
      title: 'Yup',
      body:
        "Wubba Lubba Dub-Dub is Rick's catchphrase, which he recurrently uses in the show, mostly in season one. He uses this phrase every time he's happy or makes a joke.Wubba Lubba Dub-Dub is Rick's catchphrase, which he recurrently uses in the show, mostly in season one. He uses this phrase every time he's happy or makes a joke.",
    },
    {
      id: 6,
      title: 'Yup',
      body:
        "Wubba Lubba Dub-Dub is Rick's catchphrase, which he recurrently uses in the show, mostly in season one. He uses this phrase every time he's happy or makes a joke.Wubba Lubba Dub-Dub is Rick's catchphrase, which he recurrently uses in the show, mostly in season one. He uses this phrase every time he's happy or makes a joke.",
    },
    {
      id: 7,
      title: 'Yup',
      body:
        "Wubba Lubba Dub-Dub is Rick's catchphrase, which he recurrently uses in the show, mostly in season one. He uses this phrase every time he's happy or makes a joke.Wubba Lubba Dub-Dub is Rick's catchphrase, which he recurrently uses in the show, mostly in season one. He uses this phrase every time he's happy or makes a joke.",
    },
    {
      id: 8,
      title: 'Yup',
      body:
        "Wubba Lubba Dub-Dub is Rick's catchphrase, which he recurrently uses in the show, mostly in season one. He uses this phrase every time he's happy or makes a joke.Wubba Lubba Dub-Dub is Rick's catchphrase, which he recurrently uses in the show, mostly in season one. He uses this phrase every time he's happy or makes a joke.",
    },
  ],
  current: 'list',
  note: null,
  results: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.ADD_BUTTON_CLICK:
      return { ...state, current: action.payload };
    case actions.VIEW_BUTTON_CLICK:
      return { ...state, current: action.payload };
    case actions.ADD_NOTE:
      return { ...state, notes: [...state.notes, action.payload] };
    case actions.VIEW_NOTE:
      return { ...state, current: action.payload.current, note: action.payload.note };
    case actions.EDIT_NOTE_CLICKED:
      return { ...state, current: action.payload.current, note: action.payload.note };
    case actions.EDIT_NOTE:
      // Not sure if this is okay.  I could get rid of note fairly easily I suppose...
      // Not sure how to dot chain the two though.  Everything I tried failed.
      const note = {
        id: action.payload.id,
        title: action.payload.title,
        body: action.payload.body,
      };
      const removed = [
        ...state.notes.slice(0, action.payload.index),
        ...state.notes.slice(action.payload.index + 1),
      ];
      removed.splice(action.payload.index, 0, note);
      return { ...state, notes: removed };
    case actions.DELETE_NOTE:
      return {
        ...state,
        current: action.payload.current,
        notes: [
          ...state.notes.slice(0, action.payload.note.index),
          ...state.notes.slice(action.payload.note.index + 1),
        ],
      };
    case actions.SEARCH_CLICK:
      return { ...state, current: action.payload };
    case actions.SEARCH_RESULTS_CLICKED:
      console.log(action.payload);
      return { ...state, current: action.payload.current, results: action.payload.results };
    default:
      return state;
  }
};
