export const VIEW_NOTE = 'VIEW_NOTES';

export const viewNote = (note) => {
    return (dispatch) => {
        dispatch({type: VIEW_NOTE, note: note});
    }
}