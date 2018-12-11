export const ADDING = "ADDING";
export const FETCHING = "FETCHING";

const initialState = {
    notes:[{title:"Test Note 1",message:"This is my first note"},
        {title:"Test Note 2",message:"This is my first note"},
        {title:"Test Note 3",message:"This is my first note"},
        {title:"Test Note 4",message:"This is my first note"},
        {title:"Test Note 5",message:"This is my first note"},
        {title:"Test Note 6",message:"This is my first note"}]
}

export const reducer = (state = initialState,action) => {
    switch(action.type){
        case FETCHING:
            return {...state}
        case ADDING:
            return {notes:[{...action.payload},...state.notes]}
        default:
            return {...state}
    }
}