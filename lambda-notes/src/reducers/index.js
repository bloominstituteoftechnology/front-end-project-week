import { DELETE_NOTE, EDIT_NOTE, CREATE_NOTE } from '../actions';

const initialState = [
    {
        _id: 'asdasdiuljkskhl1012939',
        title: 'First Note',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
        createdAt: 1527536455211,
    },
    {
        _id: 'jlkljhdjhl1012939',
        title: 'Second Note',
        body: 'Consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
        createdAt: 1527536455220,
    },
    {
        _id: 'ghhsjsghhse10000',
        title: 'Third Note',
        body: 'Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
        createdAt: 1527536455230,
    },
    {
        _id: 'hhkjsjdhjgfkhjljlkh10234',
        title: 'Fourth Note',
        body: 'Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
        createdAt: 1527536455240,
    },
];
// Current Application State, {action object} = initialState, action
const notesReducer = (state = initialState, action) => {
    let temp = Array.from(state);
    switch (action.type) {
        case DELETE_NOTE:
            state.forEach((item, index) => {
                if (item._id === action.payload) {
                    temp.splice(index, 1);
                    return;
                }
            });
            return temp;
        case EDIT_NOTE:
            state.forEach((item, index) => {
                if (item._id === action.payload._id) {
                    temp.splice(index, 1);
                    return;
                }
            });
            temp.push(action.payload);
            return temp;
        case CREATE_NOTE:
            temp.push(action.payload);
            return temp;
        default:
            // Returns: Next Application State
            return state;
    }
}

export default notesReducer;