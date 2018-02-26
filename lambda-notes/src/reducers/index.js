import * as actions from '../actions';

const initialState = {
    notes = [
        {
            id: 0,
            title: 'Yup',
            body: "Wubba Lubba Dub-Dub is Rick's catchphrase, which he recurrently uses in the show, mostly in season one. He uses this phrase every time he's happy or makes a joke.",
        },
        {
            id: 1,
            title: 'Yup',
            body: "Wubba Lubba Dub-Dub is Rick's catchphrase, which he recurrently uses in the show, mostly in season one. He uses this phrase every time he's happy or makes a joke.",
        },
        {
            id: 2,
            title: 'Yup',
            body: "Wubba Lubba Dub-Dub is Rick's catchphrase, which he recurrently uses in the show, mostly in season one. He uses this phrase every time he's happy or makes a joke.",
        },
        {
            id: 3,
            title: 'Yup',
            body: "Wubba Lubba Dub-Dub is Rick's catchphrase, which he recurrently uses in the show, mostly in season one. He uses this phrase every time he's happy or makes a joke.",
        },
        {
            id: 4,
            title: 'Yup',
            body: "Wubba Lubba Dub-Dub is Rick's catchphrase, which he recurrently uses in the show, mostly in season one. He uses this phrase every time he's happy or makes a joke.",
        },
        {
            id: 5,
            title: 'Yup',
            body: "Wubba Lubba Dub-Dub is Rick's catchphrase, which he recurrently uses in the show, mostly in season one. He uses this phrase every time he's happy or makes a joke.",
        },
        {
            id: 6,
            title: 'Yup',
            body: "Wubba Lubba Dub-Dub is Rick's catchphrase, which he recurrently uses in the show, mostly in season one. He uses this phrase every time he's happy or makes a joke.",
        },
        {
            id: 7,
            title: 'Yup',
            body: "Wubba Lubba Dub-Dub is Rick's catchphrase, which he recurrently uses in the show, mostly in season one. He uses this phrase every time he's happy or makes a joke.",
        },
        {
            id: 8,
            title: 'Yup',
            body: "Wubba Lubba Dub-Dub is Rick's catchphrase, which he recurrently uses in the show, mostly in season one. He uses this phrase every time he's happy or makes a joke.",
        },
    ],
}

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
}