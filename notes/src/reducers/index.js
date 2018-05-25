import {
    NOTE_ADDED,
    NOTE_UPDATED,
    NOTE_DELETED
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
        case NOTE_ADDED:
            return {...state, noteAdded: true, notes: state.notes.concat(action.payload)};
        case NOTE_UPDATED:
            return {...state, noteUpdated: true, notes: action.payload };
        case NOTE_DELETED:
            return {...state, noteDeleted: true, notes: action.payload };
        default:
            return state;
    }
};

export default rootReducer;