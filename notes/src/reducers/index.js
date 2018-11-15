import { VIEW_NOTE } from '../actions';

const initialState = {
    notes: [
        {
            title: 'Note 1',
            body: 'This is my first note',
            id: 1
        },
        {
            title: 'Note 2',
            body: 'This is my second note',
            id: 2
        },
        {
            title: 'Note 3',
            body: 'This is my third note',
            id: 3
        }
    ],
    fetching: false,
    error: null,
    viewNote: {}
};

export default (state = initialState, actions) => {
    switch(actions.type) {
        case VIEW_NOTE:
            return {...state, viewNote: actions.note};
        default:
            return state;
    }
}