import { FETCHING_NOTE, FETCH_NOTE, FETCHING_NOTES, FETCH_NOTES, ADDING_NOTE, ADD_NOTE, EDITING_NOTE, EDIT_NOTE, DELETING_NOTE, DELETE_NOTE, NOT_DELETING_NOTE } from '../actions'

const initialState = {
    fetching_notes: false,
    fetching_note: false,
    adding_note: false,
    editing_note: false,
    deleting_note: false,
    notes: [
        {
            id: 0,
            note: {
                title: "Note Title",
                content: `Lorem ipsum dolor sit amet, consectetur adipscing elit. Mauris egestas mauris sed nibh vulpatate, ac pharetra lacus aliquam. Duis malesuada justo a iaculis sagittis. Vestibulum ultrices ultricies arcu sit amet pharetra. Duis et lectus arcu. Morbi ornare dignissim dui, eu accumsan sapien lacinia et. Maecenas ultricies, ante in accumsan tempor, tortor diam vulputate elit, id finibus enim magna in massa. Suspendisse vel accumsan nisi. Vivamus elementum auctor ligula, at tempor nisl rutrum in. Sed in eros luctus ligula porta efficitur eu non nibh. Aliquam tellus ipsum, semper id cursus vel, posuere in dolor. Phasellus maximus lacinia dolor eget laoreet.

                Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phasellus diam metus, blandit ac purus a, efficitur mollis velit. ut egestas, ante at lobortis ullamcorper, neque odio fringilla odio, non mattis elit lacus ut velit. Sed feugiat nibh vel molestie sollicitudin. Duis tincidunt portitor sem, sit amet ultricies lacus pelientesque vel. Aenean quis enim placerat, posuere orci ac, condimentum tellus. Vivamus vitae sodales quam, eget ultricies lorem. Nam pellenteque massa nisl, at pellentesque nisi faucibus vitae. Curabitur sit amet turpis quam. Duis eget metus elementum, solicitudin dui sed, accumsan dui. Donec ut est orci. Nunc fringilla purus sit amet posuere volutpat. Fusce vitae lectus is neque facilisis laoreet eget non odio. Praesent sed mauris porta, volutpat ante hendrerit, ultrices nisl.`
        }
    },
    {
        id: 2,
        note: {
            title: "Note Title",
            content: `Lorem ipsum dolor sit amet, consectetur adipscing elit. Mauris egestas mauris sed nibh vulpatate, ac pharetra lacus aliquam. Duis malesuada justo a iaculis sagittis. Vestibulum ultrices ultricies arcu sit amet pharetra. Duis et lectus arcu. Morbi ornare dignissim dui, eu accumsan sapien lacinia et. Maecenas ultricies, ante in accumsan tempor, tortor diam vulputate elit, id finibus enim magna in massa. Suspendisse vel accumsan nisi. Vivamus elementum auctor ligula, at tempor nisl rutrum in. Sed in eros luctus ligula porta efficitur eu non nibh. Aliquam tellus ipsum, semper id cursus vel, posuere in dolor. Phasellus maximus lacinia dolor eget laoreet.

            Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phasellus diam metus, blandit ac purus a, efficitur mollis velit. ut egestas, ante at lobortis ullamcorper, neque odio fringilla odio, non mattis elit lacus ut velit. Sed feugiat nibh vel molestie sollicitudin. Duis tincidunt portitor sem, sit amet ultricies lacus pelientesque vel. Aenean quis enim placerat, posuere orci ac, condimentum tellus. Vivamus vitae sodales quam, eget ultricies lorem. Nam pellenteque massa nisl, at pellentesque nisi faucibus vitae. Curabitur sit amet turpis quam. Duis eget metus elementum, solicitudin dui sed, accumsan dui. Donec ut est orci. Nunc fringilla purus sit amet posuere volutpat. Fusce vitae lectus is neque facilisis laoreet eget non odio. Praesent sed mauris porta, volutpat ante hendrerit, ultrices nisl.`
    }
},
{
    id: 3,
    note: {
        title: "Note Title",
        content: `Lorem ipsum dolor sit amet, consectetur adipscing elit. Mauris egestas mauris sed nibh vulpatate, ac pharetra lacus aliquam. Duis malesuada justo a iaculis sagittis. Vestibulum ultrices ultricies arcu sit amet pharetra. Duis et lectus arcu. Morbi ornare dignissim dui, eu accumsan sapien lacinia et. Maecenas ultricies, ante in accumsan tempor, tortor diam vulputate elit, id finibus enim magna in massa. Suspendisse vel accumsan nisi. Vivamus elementum auctor ligula, at tempor nisl rutrum in. Sed in eros luctus ligula porta efficitur eu non nibh. Aliquam tellus ipsum, semper id cursus vel, posuere in dolor. Phasellus maximus lacinia dolor eget laoreet.

        Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phasellus diam metus, blandit ac purus a, efficitur mollis velit. ut egestas, ante at lobortis ullamcorper, neque odio fringilla odio, non mattis elit lacus ut velit. Sed feugiat nibh vel molestie sollicitudin. Duis tincidunt portitor sem, sit amet ultricies lacus pelientesque vel. Aenean quis enim placerat, posuere orci ac, condimentum tellus. Vivamus vitae sodales quam, eget ultricies lorem. Nam pellenteque massa nisl, at pellentesque nisi faucibus vitae. Curabitur sit amet turpis quam. Duis eget metus elementum, solicitudin dui sed, accumsan dui. Donec ut est orci. Nunc fringilla purus sit amet posuere volutpat. Fusce vitae lectus is neque facilisis laoreet eget non odio. Praesent sed mauris porta, volutpat ante hendrerit, ultrices nisl.`
}
},
{
    id: 4,
    note: {
        title: "Note Title",
        content: `Lorem ipsum dolor sit amet, consectetur adipscing elit. Mauris egestas mauris sed nibh vulpatate, ac pharetra lacus aliquam. Duis malesuada justo a iaculis sagittis. Vestibulum ultrices ultricies arcu sit amet pharetra. Duis et lectus arcu. Morbi ornare dignissim dui, eu accumsan sapien lacinia et. Maecenas ultricies, ante in accumsan tempor, tortor diam vulputate elit, id finibus enim magna in massa. Suspendisse vel accumsan nisi. Vivamus elementum auctor ligula, at tempor nisl rutrum in. Sed in eros luctus ligula porta efficitur eu non nibh. Aliquam tellus ipsum, semper id cursus vel, posuere in dolor. Phasellus maximus lacinia dolor eget laoreet.

        Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phasellus diam metus, blandit ac purus a, efficitur mollis velit. ut egestas, ante at lobortis ullamcorper, neque odio fringilla odio, non mattis elit lacus ut velit. Sed feugiat nibh vel molestie sollicitudin. Duis tincidunt portitor sem, sit amet ultricies lacus pelientesque vel. Aenean quis enim placerat, posuere orci ac, condimentum tellus. Vivamus vitae sodales quam, eget ultricies lorem. Nam pellenteque massa nisl, at pellentesque nisi faucibus vitae. Curabitur sit amet turpis quam. Duis eget metus elementum, solicitudin dui sed, accumsan dui. Donec ut est orci. Nunc fringilla purus sit amet posuere volutpat. Fusce vitae lectus is neque facilisis laoreet eget non odio. Praesent sed mauris porta, volutpat ante hendrerit, ultrices nisl.`
}
},
{
    id: 5,
    note: {
        title: "Note Title",
        content: `Lorem ipsum dolor sit amet, consectetur adipscing elit. Mauris egestas mauris sed nibh vulpatate, ac pharetra lacus aliquam. Duis malesuada justo a iaculis sagittis. Vestibulum ultrices ultricies arcu sit amet pharetra. Duis et lectus arcu. Morbi ornare dignissim dui, eu accumsan sapien lacinia et. Maecenas ultricies, ante in accumsan tempor, tortor diam vulputate elit, id finibus enim magna in massa. Suspendisse vel accumsan nisi. Vivamus elementum auctor ligula, at tempor nisl rutrum in. Sed in eros luctus ligula porta efficitur eu non nibh. Aliquam tellus ipsum, semper id cursus vel, posuere in dolor. Phasellus maximus lacinia dolor eget laoreet.

        Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phasellus diam metus, blandit ac purus a, efficitur mollis velit. ut egestas, ante at lobortis ullamcorper, neque odio fringilla odio, non mattis elit lacus ut velit. Sed feugiat nibh vel molestie sollicitudin. Duis tincidunt portitor sem, sit amet ultricies lacus pelientesque vel. Aenean quis enim placerat, posuere orci ac, condimentum tellus. Vivamus vitae sodales quam, eget ultricies lorem. Nam pellenteque massa nisl, at pellentesque nisi faucibus vitae. Curabitur sit amet turpis quam. Duis eget metus elementum, solicitudin dui sed, accumsan dui. Donec ut est orci. Nunc fringilla purus sit amet posuere volutpat. Fusce vitae lectus is neque facilisis laoreet eget non odio. Praesent sed mauris porta, volutpat ante hendrerit, ultrices nisl.`
}
},
{
    id: 7,
    note: {
        title: "Note Title",
        content: `Lorem ipsum dolor sit amet, consectetur adipscing elit. Mauris egestas mauris sed nibh vulpatate, ac pharetra lacus aliquam. Duis malesuada justo a iaculis sagittis. Vestibulum ultrices ultricies arcu sit amet pharetra. Duis et lectus arcu. Morbi ornare dignissim dui, eu accumsan sapien lacinia et. Maecenas ultricies, ante in accumsan tempor, tortor diam vulputate elit, id finibus enim magna in massa. Suspendisse vel accumsan nisi. Vivamus elementum auctor ligula, at tempor nisl rutrum in. Sed in eros luctus ligula porta efficitur eu non nibh. Aliquam tellus ipsum, semper id cursus vel, posuere in dolor. Phasellus maximus lacinia dolor eget laoreet.

        Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phasellus diam metus, blandit ac purus a, efficitur mollis velit. ut egestas, ante at lobortis ullamcorper, neque odio fringilla odio, non mattis elit lacus ut velit. Sed feugiat nibh vel molestie sollicitudin. Duis tincidunt portitor sem, sit amet ultricies lacus pelientesque vel. Aenean quis enim placerat, posuere orci ac, condimentum tellus. Vivamus vitae sodales quam, eget ultricies lorem. Nam pellenteque massa nisl, at pellentesque nisi faucibus vitae. Curabitur sit amet turpis quam. Duis eget metus elementum, solicitudin dui sed, accumsan dui. Donec ut est orci. Nunc fringilla purus sit amet posuere volutpat. Fusce vitae lectus is neque facilisis laoreet eget non odio. Praesent sed mauris porta, volutpat ante hendrerit, ultrices nisl.`
}
},{
    id: 11,
    note: {
        title: "Note Title",
        content: `Lorem ipsum dolor sit amet, consectetur adipscing elit. Mauris egestas mauris sed nibh vulpatate, ac pharetra lacus aliquam. Duis malesuada justo a iaculis sagittis. Vestibulum ultrices ultricies arcu sit amet pharetra. Duis et lectus arcu. Morbi ornare dignissim dui, eu accumsan sapien lacinia et. Maecenas ultricies, ante in accumsan tempor, tortor diam vulputate elit, id finibus enim magna in massa. Suspendisse vel accumsan nisi. Vivamus elementum auctor ligula, at tempor nisl rutrum in. Sed in eros luctus ligula porta efficitur eu non nibh. Aliquam tellus ipsum, semper id cursus vel, posuere in dolor. Phasellus maximus lacinia dolor eget laoreet.

        Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phasellus diam metus, blandit ac purus a, efficitur mollis velit. ut egestas, ante at lobortis ullamcorper, neque odio fringilla odio, non mattis elit lacus ut velit. Sed feugiat nibh vel molestie sollicitudin. Duis tincidunt portitor sem, sit amet ultricies lacus pelientesque vel. Aenean quis enim placerat, posuere orci ac, condimentum tellus. Vivamus vitae sodales quam, eget ultricies lorem. Nam pellenteque massa nisl, at pellentesque nisi faucibus vitae. Curabitur sit amet turpis quam. Duis eget metus elementum, solicitudin dui sed, accumsan dui. Donec ut est orci. Nunc fringilla purus sit amet posuere volutpat. Fusce vitae lectus is neque facilisis laoreet eget non odio. Praesent sed mauris porta, volutpat ante hendrerit, ultrices nisl.`
}
},
{
    id: 10,
    note: {
        title: "Note Title",
        content: `Lorem ipsum dolor sit amet, consectetur adipscing elit. Mauris egestas mauris sed nibh vulpatate, ac pharetra lacus aliquam. Duis malesuada justo a iaculis sagittis. Vestibulum ultrices ultricies arcu sit amet pharetra. Duis et lectus arcu. Morbi ornare dignissim dui, eu accumsan sapien lacinia et. Maecenas ultricies, ante in accumsan tempor, tortor diam vulputate elit, id finibus enim magna in massa. Suspendisse vel accumsan nisi. Vivamus elementum auctor ligula, at tempor nisl rutrum in. Sed in eros luctus ligula porta efficitur eu non nibh. Aliquam tellus ipsum, semper id cursus vel, posuere in dolor. Phasellus maximus lacinia dolor eget laoreet.

        Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phasellus diam metus, blandit ac purus a, efficitur mollis velit. ut egestas, ante at lobortis ullamcorper, neque odio fringilla odio, non mattis elit lacus ut velit. Sed feugiat nibh vel molestie sollicitudin. Duis tincidunt portitor sem, sit amet ultricies lacus pelientesque vel. Aenean quis enim placerat, posuere orci ac, condimentum tellus. Vivamus vitae sodales quam, eget ultricies lorem. Nam pellenteque massa nisl, at pellentesque nisi faucibus vitae. Curabitur sit amet turpis quam. Duis eget metus elementum, solicitudin dui sed, accumsan dui. Donec ut est orci. Nunc fringilla purus sit amet posuere volutpat. Fusce vitae lectus is neque facilisis laoreet eget non odio. Praesent sed mauris porta, volutpat ante hendrerit, ultrices nisl.`
}
},
{
    id: 12,
    note: {
        title: "Note Title",
        content: `Lorem ipsum dolor sit amet, consectetur adipscing elit. Mauris egestas mauris sed nibh vulpatate, ac pharetra lacus aliquam. Duis malesuada justo a iaculis sagittis. Vestibulum ultrices ultricies arcu sit amet pharetra. Duis et lectus arcu. Morbi ornare dignissim dui, eu accumsan sapien lacinia et. Maecenas ultricies, ante in accumsan tempor, tortor diam vulputate elit, id finibus enim magna in massa. Suspendisse vel accumsan nisi. Vivamus elementum auctor ligula, at tempor nisl rutrum in. Sed in eros luctus ligula porta efficitur eu non nibh. Aliquam tellus ipsum, semper id cursus vel, posuere in dolor. Phasellus maximus lacinia dolor eget laoreet.

        Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phasellus diam metus, blandit ac purus a, efficitur mollis velit. ut egestas, ante at lobortis ullamcorper, neque odio fringilla odio, non mattis elit lacus ut velit. Sed feugiat nibh vel molestie sollicitudin. Duis tincidunt portitor sem, sit amet ultricies lacus pelientesque vel. Aenean quis enim placerat, posuere orci ac, condimentum tellus. Vivamus vitae sodales quam, eget ultricies lorem. Nam pellenteque massa nisl, at pellentesque nisi faucibus vitae. Curabitur sit amet turpis quam. Duis eget metus elementum, solicitudin dui sed, accumsan dui. Donec ut est orci. Nunc fringilla purus sit amet posuere volutpat. Fusce vitae lectus is neque facilisis laoreet eget non odio. Praesent sed mauris porta, volutpat ante hendrerit, ultrices nisl.`
}
}
    ],
    error: null
}

const noteReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCHING_NOTES:
        return Object.assign({}, state, {
            fetching_notes: true
        });
        case FETCH_NOTES:
        console.log(action.payload)
        return Object.assign({}, state, {
            notes: action.payload,
            fetching_notes: false,
        })
        case FETCHING_NOTE:
        return Object.assign({}, state, {
            fetching_note: true
        })
        case FETCH_NOTE:
        return Object.assign({}, state, {
            fetching_note: false,
            notes: action.payload
        })
        case DELETING_NOTE:
        return Object.assign({}, state, {
            deleting_note: true,
        })
        case ADDING_NOTE:
        return Object.assign({}, state, {
            adding_note: true,
        })
        case ADD_NOTE:
        let currentNotes = state.notes.slice();
        let addingNote = currentNotes.concat(action.payload);
        return Object.assign({}, state, { 
            notes: addingNote,
            adding_note: false
        })
        case EDITING_NOTE:
        return Object.assign({}, state, {
            editing_note: true
        })
        case EDIT_NOTE:
        let unchangedNotes = state.notes.filter(note => {
            return note.id !== action.payload.id
        })
        let newNotes = unchangedNotes.concat(action.payload)
        return Object.assign({}, state, {
            notes: newNotes,
            editing_note: false,
        })
        case DELETE_NOTE:
        if (state.notes.length > 0) {
        let sparedNotes = state.notes.filter(note => {
            return note.id !== action.payload.id
        }) // Realized after a bit of confusion that action.payload was returning a string and the input in state was returning a number.
        return Object.assign({}, state, {
            notes: sparedNotes,
            deleting_note: false,
        })}
        return Object.assign({}, state, {
            deleting_note: false,
        })
        case NOT_DELETING_NOTE:
        return Object.assign({}, state, {
            deleting_note: false,
        })
        default:
        return state;
    }
}

export default noteReducer