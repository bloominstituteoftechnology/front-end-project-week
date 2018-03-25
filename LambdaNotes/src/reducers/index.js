import defaultNotes from './defaultNotes';

let idCount = 7;

const intialState = {
  nextId: idCount,
  notes: defaultNotes
}

export default (state = intialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
}