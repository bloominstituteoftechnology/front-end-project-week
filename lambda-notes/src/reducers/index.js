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
      return { ...state, current: action.payload.current, note: action.payload.note};
    default:
      return state;
  }
};
