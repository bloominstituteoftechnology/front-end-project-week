import { ADD_NOTE, DELETE_NOTE } from '../Actions';
 
const initialState = {
    notes: [
        {
            id: 1,
            title: 'Note 1',
            note: "Great Green Globs"
        },
        {   
            id: 2,
            title: 'Note 2',
            note: "Great Green Globs"
        },
        {
            id: 3,
            title: 'Note 3',
            note: "Great Green Globs"
        },
        {
            id: 4,
            title: 'Note 4',
            note: "Great Green Globs"
        },
        {
            id: 5,
            title: 'Note 5',
            note: "Great Green Globs"
        },
        {
            id: 6,
            title: 'Note 6',
            note: "Great Green Globs"
        },
        {
            id: 7,
            title: 'Note 7',
            note: "Great Green Globs"
        },
        {
            id: 8,
            title: 'Note 8',
            note: "Great Green Globs"
        },
        {
            id: 9,
            title: 'Note 9',
            note: "Great Green Globs"
        },
    ]
};

export default function notes(state = initialState, action) {
  switch (action.type) {
      case ADD_NOTE: 
        return {...state,
               notes: [...state.notes, {...action.note, id: action.id }]
        };

      case DELETE_NOTE:
        return {...state,
                notes: state.notes.slice().filter(note => note.id !== action.id )
        };
        default:
            return state;
  }
}