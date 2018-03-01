const showNote = (state = "SHOW_ALL", action) => {
  switch (action.type) {
    case "SHOW_NOTE":
      return action.filter;
    default:
      return state;
  }
};

export default showNote;
