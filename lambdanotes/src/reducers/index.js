const initialState = {
  notes: [],
  appState: "list",
  viewId: null,
  newId: 4
};

const noteReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default noteReducer;
