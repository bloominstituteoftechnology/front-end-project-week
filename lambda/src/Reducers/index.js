import { addNote } from '../Reducers';

const initialState = {
    notes: [
        {
            title: 'Note 1',
            note: "Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phasellus diam metus. blandit ac purus a, efficitur mollis.."
        },
        {
            title: 'Note 2',
            note: "Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phasellus diam metus. blandit ac purus a, efficitur mollis.."
        }
    ]
};

export default function notes(state = initialState, action) {
    return state;
}