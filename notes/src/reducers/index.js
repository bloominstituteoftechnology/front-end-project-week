const initialState = {
    notes: [
        {title: 'example title', content: 'example content'},
        {title: 'second title', content:'second example content'},
    ],
    adding: false,
    error: null
}

const reducer = (state=initialState, action) =>{
    switch(action.type){
        default:
            return state;
    }
}

export default reducer;