const placeholderText =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

const initialState = {
  notes: [
    { title: "First Note", content: placeholderText },
    { title: "Second Note", content: placeholderText },
    { title: "Third Note", content: placeholderText },
    { title: "Fourth Note", content: placeholderText },
    { title: "Fifth Note", content: placeholderText },
    { title: "Sixth Note", content: placeholderText },
    { title: "Seventh Note", content: placeholderText }
  ]
};

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
