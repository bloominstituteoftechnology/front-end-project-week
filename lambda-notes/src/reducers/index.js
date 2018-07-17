import {ADD_NOTE} from '../actions';

const initialState = {
    notes: [
        {
        title: 'Note Title',
            content: 'Morbi pellentesque euismod venenatis Nulla ut nibh nunc Phaseilus diam metus. blandit ac purus a effictur mollis'
        },
        {
            title: 'Note Title',
            content: 'Morbi pellentesque euismod venenatis Nulla ut nibh nunc Phaseilus diam metus. blandit ac purus a effictur mollis'
        },
        {
            title: 'Note Title',
            content: 'Morbi pellentesque euismod venenatis Nulla ut nibh nunc Phaseilus diam metus. blandit ac purus a effictur mollis'
        },
        {
            title: 'Note Title',
            content: 'Morbi pellentesque euismod venenatis Nulla ut nibh nunc Phaseilus diam metus. blandit ac purus a effictur mollis'
        },
        {
            title: 'Note Title',
            content: 'Morbi pellentesque euismod venenatis Nulla ut nibh nunc Phaseilus diam metus. blandit ac purus a effictur mollis'
        },
        {
            title: 'Note Title',
            content: 'Morbi pellentesque euismod venenatis Nulla ut nibh nunc Phaseilus diam metus. blandit ac purus a effictur mollis'
        },
        {
            title: 'Note Title',
            content: 'Morbi pellentesque euismod venenatis Nulla ut nibh nunc Phaseilus diam metus. blandit ac purus a effictur mollis'
        },
        {
            title: 'Note Title',
            content: 'Morbi pellentesque euismod venenatis Nulla ut nibh nunc Phaseilus diam metus. blandit ac purus a effictur mollis'
        },
    ],
}


const rootReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_NOTE:
        return {...state, notes: action.payload};

        default:
            return state;
    }
}

export default rootReducer;