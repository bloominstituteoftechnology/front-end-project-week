const initialState = {
    notes: [
        {
            heading: 'Okay now here is a test',
            text: 'Let me tell you what it is a really good test and I am just going to tell you right now about how good of a test it is.'
        },
        {
            heading: 'Okay now here is a test',
            text: 'Let me tell you what it is a really good test and I am just going to tell you right now about how good of a test it is.'
        },
        {
            heading: 'Okay now here is a test',
            text: 'Let me tell you what it is a really good test and I am just going to tell you right now about how good of a test it is.'
        },
        {
            heading: 'Okay now here is a test',
            text: 'Let me tell you what it is a really good test and I am just going to tell you right now about how good of a test it is.'
        },
        {
            heading: 'Okay now here is a test',
            text: 'Let me tell you what it is a really good test and I am just going to tell you right now about how good of a test it is.'
        },
        {
            heading: 'Okay now here is a test',
            text: 'Let me tell you what it is a really good test and I am just going to tell you right now about how good of a test it is.'
        },

    ]
}

export default(state=initialState, action) => {
    switch(action.type) {
        default:
            return state;
    }
}