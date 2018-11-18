import { GET_NOTES, DELETE_NOTE, ADD_NOTE } from '../actions/types';

const initialState = {
    notes: [
        {
            id: 1,
            title: 'New Note',
            content: 'className="note-text">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using'
        },
        {
            id: 2,
            title: 'Testing',
            content: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using'
        },
        {
            id: 3,
            title: 'Go to bed',
            content: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using'
        },

        {
            id: 4,
            title: 'New Note',
            content: 'className="note-text">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using'
        },
        {
            id: 5,
            title: 'Testing',
            content: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using'
        },
        {
            id: 6,
            title: 'Go to bed',
            content: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using'
        },
    ]
};

export default function(state = initialState, action) {
    switch (action.type) {
        case GET_NOTES:
            return {
                ...state
            };

        case DELETE_NOTE:
            return {
                ...state,
                notes: state.notes.filter(note => note.id !== action.payload)
            };

        case ADD_NOTE:
            return {
                ...state,
                notes: [action.payload, ...state.notes]
            };


        default:
            return state;
    }
}