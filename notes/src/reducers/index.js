const initialState = {
    notes: [
        {
            heading: '',
            text: ''
        }
    ]
}

export default(state=initialState, action) => {
    switch(action.type) {
        default:
            return state;
    }
}