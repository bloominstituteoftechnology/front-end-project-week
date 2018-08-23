import { ADD_NOTE, EDIT_NOTE } from '../actions/index';


const initialState = [
    {
        id: 'asdasdiuljkskhl1012939',
        title: 'First Note',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
        createdAt: 1527536455211,
    },
    {
        id: 'jlkljhdjhl1012939',
        title: 'Second Note',
        body: 'Consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
        createdAt: 1527536455220,
    },
    {
        id: 'ghhsjsghhse10000',
        title: 'Third Note',
        body: 'Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
        createdAt: 1527536455230,
    },
    {
        id: 'hhkjsjdhjgfkhjljlkh10234',
        title: 'Fourth Note',
        body: 'Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
        createdAt: 1527536455230,
    },
];
export const noteReducer =(state = initialState , action) => {
    switch (action.type) {
        case ADD_NOTE:
            return [...state, { id:`LAMBDA${Date.now()}`, title : action.title, body : action.body, createdAt : Date.now()}]
        case EDIT_NOTE :
            state.forEach((note, index) => {
               if(note.id === action.noteData.id){
                   state.splice(index, 1)
                   return
               }
               state.push(action.noteData)
            })
            break;
        default:
            return state;
    }
}
