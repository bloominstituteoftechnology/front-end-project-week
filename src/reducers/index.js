import {
    ADDING_NOTE,
    NOTE_ADDED,
    UPDATING_NOTE,
    NOTE_UPDATED,
    DELETING_NOTE,
    NOTE_DELETED,
    ERROR
} from "../actions";

const initialState = {
    notes: [{
        id: 0,
        title: 'One',
        body: 'Bacon ipsum dolor amet ball tip pork belly ribeye cupim shankle picanha. Boudin turducken sirloin bresaola, pig alcatra hamburger pork chop ham hock flank kevin shoulder beef kielbasa tri-tip. Fatback jerky picanha shoulder biltong filet mignon bresaola pastrami chicken tri-tip porchetta boudin. Kevin porchetta meatloaf shank andouille, cow sausage beef ribs bacon. Fatback corned beef tongue rump doner pastrami picanha kevin venison shoulder burgdoggen jerky chuck meatloaf kielbasa.'
    }, {
        id: 1,
        title: 'Two',
        body: 'Bacon ipsum dolor amet ball tip pork belly ribeye cupim shankle picanha. Boudin turducken sirloin bresaola, pig alcatra hamburger pork chop ham hock flank kevin shoulder beef kielbasa tri-tip. Fatback jerky picanha shoulder biltong filet mignon bresaola pastrami chicken tri-tip porchetta boudin. Kevin porchetta meatloaf shank andouille, cow sausage beef ribs bacon. Fatback corned beef tongue rump doner pastrami picanha kevin venison shoulder burgdoggen jerky chuck meatloaf kielbasa.'
    }, {
        id: 2,
        title: 'Three',
        body: 'Bacon ipsum dolor amet ball tip pork belly ribeye cupim shankle picanha. Boudin turducken sirloin bresaola, pig alcatra hamburger pork chop ham hock flank kevin shoulder beef kielbasa tri-tip. Fatback jerky picanha shoulder biltong filet mignon bresaola pastrami chicken tri-tip porchetta boudin. Kevin porchetta meatloaf shank andouille, cow sausage beef ribs bacon. Fatback corned beef tongue rump doner pastrami picanha kevin venison shoulder burgdoggen jerky chuck meatloaf kielbasa.'
    }, {
        id: 3,
        title: 'Four',
        body: 'Bacon ipsum dolor amet ball tip pork belly ribeye cupim shankle picanha. Boudin turducken sirloin bresaola, pig alcatra hamburger pork chop ham hock flank kevin shoulder beef kielbasa tri-tip. Fatback jerky picanha shoulder biltong filet mignon bresaola pastrami chicken tri-tip porchetta boudin. Kevin porchetta meatloaf shank andouille, cow sausage beef ribs bacon. Fatback corned beef tongue rump doner pastrami picanha kevin venison shoulder burgdoggen jerky chuck meatloaf kielbasa.'
    }, {
        id: 4,
        title: 'Five',
        body: 'Bacon ipsum dolor amet ball tip pork belly ribeye cupim shankle picanha. Boudin turducken sirloin bresaola, pig alcatra hamburger pork chop ham hock flank kevin shoulder beef kielbasa tri-tip. Fatback jerky picanha shoulder biltong filet mignon bresaola pastrami chicken tri-tip porchetta boudin. Kevin porchetta meatloaf shank andouille, cow sausage beef ribs bacon. Fatback corned beef tongue rump doner pastrami picanha kevin venison shoulder burgdoggen jerky chuck meatloaf kielbasa.'
    }, {
        id: 5,
        title: 'Six',
        body: 'Bacon ipsum dolor amet ball tip pork belly ribeye cupim shankle picanha. Boudin turducken sirloin bresaola, pig alcatra hamburger pork chop ham hock flank kevin shoulder beef kielbasa tri-tip. Fatback jerky picanha shoulder biltong filet mignon bresaola pastrami chicken tri-tip porchetta boudin. Kevin porchetta meatloaf shank andouille, cow sausage beef ribs bacon. Fatback corned beef tongue rump doner pastrami picanha kevin venison shoulder burgdoggen jerky chuck meatloaf kielbasa.'
    }],
    addingNote: false,
    noteAdded: false,
    updatingNote: false,
    noteUpdated: false,
    deletingNote: false,
    noteDeleted: false,
    error: null
}


export const rootReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADDING_NOTE:
            return { ...state, addingNote: true};
        case NOTE_ADDED:
            return { ...state, addingNote: false, noteAdded: true, notes: state.notes.concat(action.payload)};

        case UPDATING_NOTE:
            return { ...state, updatingNote: true};
        case NOTE_UPDATED:
            return { ...state, updatingNote: false, noteUpdated: true, notes: state.notes.slice(0, state.notes.findIndex(note => note.id === action.payload.id)).concat(action.payload).concat(state.notes.slice(state.notes.findIndex(note => note.id === action.payload.id) + 1))};

        case DELETING_NOTE:
            return { ...state, deletingNote: true};
        case NOTE_DELETED:
            return { ...state, deletingNote: false, noteDeleted: true, notes: state.notes.slice(0, state.notes.findIndex(note => note.id === action.payload)).concat(state.notes.slice(state.notes.findIndex(note => note.id === action.payload) + 1))};

        case ERROR:
            return { ...state, error: action.payload};
        default:
            return state;
    }
};

export default rootReducer;