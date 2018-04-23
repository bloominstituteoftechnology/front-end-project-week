const initialState = {
  notes: [
    { title: "First Note", content: "I really like cheese" },
    { title: "Second Note", content: "I hate cheese" }
  ]
};

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
