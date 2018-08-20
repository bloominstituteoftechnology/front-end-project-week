export const FETCHING_NOTES = 'FETCHING_NOTES'
export const FETCHED_NOTES = 'FETCHED_NOTES'
export const ERROR = 'ERROR'

export const fetchNotes = () => {
    return dispatch => {
        dispatch({ type: FETCHING_NOTES })
        // Do something 
        const notes = testNotes
        dispatch({ type: FETCHED_NOTES, payload: notes })
    }
}

const testNotes = [
    {
        title: 'Title 1',
        content: 'Lorem ipsum'
    },
    {
        title: 'Title 1',
        content: 'Lorem ipsum'
    },
    {
        title: 'Title 1',
        content: 'Lorem ipsum'
    }
]