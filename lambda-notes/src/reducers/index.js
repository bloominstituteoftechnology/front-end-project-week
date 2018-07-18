import {ADD_NOTE, UPDATE_NOTE, DELETE_NOTE} from '../actions';

const initialState = {
    notes: [
        {
            id: 0,
            title: 'Note Title',
            content: 'Morbi pellentesque euismod venenatis Nulla ut nibh nunc Phaseilus diam metus. blandit ac purus a effictur mollis'
        },
        {
            id: 1,
            title: 'Note Title',
            content: 'Morbi pellentesque euismod venenatis Nulla ut nibh nunc Phaseilus diam metus. blandit ac purus a effictur mollis'
        },
        {
            id: 2,
            title: 'Note Title',
            content: 'Morbi pellentesque euismod venenatis Nulla ut nibh nunc Phaseilus diam metus. blandit ac purus a effictur mollis'
        },
        {
            id: 3,
            title: 'Note Title',
            content: 'Morbi pellentesque euismod venenatis Nulla ut nibh nunc Phaseilus diam metus. blandit ac purus a effictur mollis'
        },
        {
            id: 4,
            title: 'Note Title',
            content: 'Morbi pellentesque euismod venenatis Nulla ut nibh nunc Phaseilus diam metus. blandit ac purus a effictur mollis'
        },
        {   
            id: 5,
            title: 'Note Title',
            content: 'Morbi pellentesque euismod venenatis Nulla ut nibh nunc Phaseilus diam metus. blandit ac purus a effictur mollis'
        },
        {
            id: 6,
            title: 'Note Title',
            content: 'Morbi pellentesque euismod venenatis Nulla ut nibh nunc Phaseilus diam metus. blandit ac purus a effictur mollis'
        },
        {
            id: 7,
            title: 'Note Title',
            content: 'Morbi pellentesque euismod venenatis Nulla ut nibh nunc Phaseilus diam metus. blandit ac purus a effictur mollis'
        },
    ],
}


const rootReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_NOTE:
        return Object.assign({}, state, {
            notes: [...state.notes, action.payload]
          });
        
        case UPDATE_NOTE:
        return {...state, notes: action.payload };

        case DELETE_NOTE:
        return{...state, notes: action.payload};

        default:
            return state;
    }
}

export default rootReducer;