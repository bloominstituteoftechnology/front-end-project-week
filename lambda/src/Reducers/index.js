import { ADD_NOTE, DELETE_NOTE } from '../Actions';
 


const initialState = {
    notes: [
        {
            id: 1,
            title: 'Note 1',
            note: "Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phasellus diam metus. blandit ac purus a, efficitur mollis.."
        },
        {   
            id: 2,
            title: 'Note 2',
            note: "Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phasellus diam metus. blandit ac purus a, efficitur mollis.."
        },
        {
            id: 3,
            title: 'Note 3',
            note: "Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phasellus diam metus. blandit ac purus a, efficitur mollis.."

        },
        {
            id: 4,
            title: 'Note 4',
            note: "Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phasellus diam metus. blandit ac purus a, efficitur mollis.."
        },
        {
            id: 5,
            title: 'Note 5',
            note: "Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phasellus diam metus. blandit ac purus a, efficitur mollis.."
        },
        {
            id: 6,
            title: 'Note 6',
            note: "Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phasellus diam metus. blandit ac purus a, efficitur mollis.."
        },
        {
            id: 7,
            title: 'Note 7',
            note: "Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phasellus diam metus. blandit ac purus a, efficitur mollis.."
        },
        {
            id: 8,
            title: 'Note 8',
            note: "Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phasellus diam metus. blandit ac purus a, efficitur mollis.."
        },
        {
            id: 9,
            title: 'Note 9',
            note: "Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phasellus diam metus. blandit ac purus a, efficitur mollis.."
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

