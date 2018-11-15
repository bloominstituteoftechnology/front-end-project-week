

const initialState = {
    notes: [],
    loadingNotes: false,
    notesLoaded: false,
    savingNotes: false,
    updatingNotes: false,
    deletingNotes: false,
    error: null,
};

export default (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}