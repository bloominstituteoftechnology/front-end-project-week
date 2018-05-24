import { ADD_NOTE, EDIT_NOTE, DELETING_NOTE, DELETE_NOTE, NOT_DELETING_NOTE } from '../actions'

const initialState = {
    input: '',
    deleting: false,
    notes: [
        {
            id: 0,
            title: {
                title: "Note Title",
                content: `Lorem ipsum dolor sit amet, consectetur adipscing elit. Mauris egestas mauris sed nibh vulpatate, ac pharetra lacus aliquam. Duis malesuada justo a iaculis sagittis. Vestibulum ultrices ultricies arcu sit amet pharetra. Duis et lectus arcu. Morbi ornare dignissim dui, eu accumsan sapien lacinia et. Maecenas ultricies, ante in accumsan tempor, tortor diam vulputate elit, id finibus enim magna in massa. Suspendisse vel accumsan nisi. Vivamus elementum auctor ligula, at tempor nisl rutrum in. Sed in eros luctus ligula porta efficitur eu non nibh. Aliquam tellus ipsum, semper id cursus vel, posuere in dolor. Phasellus maximus lacinia dolor eget laoreet.

                Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phasellus diam metus, blandit ac purus a, efficitur mollis velit. ut egestas, ante at lobortis ullamcorper, neque odio fringilla odio, non mattis elit lacus ut velit. Sed feugiat nibh vel molestie sollicitudin. Duis tincidunt portitor sem, sit amet ultricies lacus pelientesque vel. Aenean quis enim placerat, posuere orci ac, condimentum tellus. Vivamus vitae sodales quam, eget ultricies lorem. Nam pellenteque massa nisl, at pellentesque nisi faucibus vitae. Curabitur sit amet turpis quam. Duis eget metus elementum, solicitudin dui sed, accumsan dui. Donec ut est orci. Nunc fringilla purus sit amet posuere volutpat. Fusce vitae lectus is neque facilisis laoreet eget non odio. Praesent sed mauris porta, volutpat ante hendrerit, ultrices nisl.`
        }
    }
    ],
    
}

const noteReducer = (state = initialState, action) => {
    switch (action.type) {
        case DELETING_NOTE:
        console.log('Hey, I am running')
        return Object.assign({}, state, {
            deleting: true,
        })
        case ADD_NOTE:
        let currentNotes = state.notes.slice();
        let addingNote = currentNotes.concat(action.payload);
        return Object.assign({}, state, { 
            input: '', 
            notes: addingNote 
        })
        case EDIT_NOTE:
        const id = action.payload.id;
        const title = action.payload.title;
        const content = action.payload.content;
        if (id === currentNotes.id) {
            currentNotes.title = title;
            currentNotes.content = content;
        }
        return Object.assign({}, state, { 
            notes: currentNotes,
        })
        case DELETE_NOTE:
        if (state.notes.length > 0) {
        let sparedNotes = state.notes.filter(note => {
            return note.id.toString() !== action.payload
        }) // Realized after a bit of confusion that action.payload was returning a string and the input in state was returning a number.
        return Object.assign({}, state, {
            notes: sparedNotes,
            deleting: false,
        })}
        return Object.assign({}, state, {
            deleting: false,
        })
        case NOT_DELETING_NOTE:
        return Object.assign({}, state, {
            deleting: false,
        })
        default:
        return state;
    }
}

export default noteReducer