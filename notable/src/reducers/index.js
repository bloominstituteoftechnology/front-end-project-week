import {
  SUCCESS,
  FETCHING,
  ERROR,
  SUCCESS_SINGLE,
  UPDATE,
  FILTER,
  SIGNIN
} from "../actions";

const initialState = {
  notes: [
    {
      tags: [],
      title: "",
      textBody: ""
    }
  ],
  singleNote: {
    tags: [],
    title: "",
    textBody: ""
  },
  filteredNotes: [],
  allTags: [],
  fetching: false,
  updating: false,
  error: "",
  signedOut: true
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCHING:
      return Object.assign({}, state, { fetching: true });
    case SUCCESS:
      // const tagList = [];
      // action.payload.forEach(note => {
      //   const strArr = note.textBody.split(" ");
      //   strArr.forEach(word => {
      //     const tag = word.substr(1).trim();
      //     if (word[0] === "#" && !tagList.includes(word.substr(1))) {
      //       note.tags.push(tag);
      //       tagList.push(tag);
      //     } else if (word[0] === "#" && tagList.includes(word.substr(1))) {
      //       note.tags.push(tag);
      //     }
      //   });
      // });
      // tagList.push("ALL");
      return Object.assign({}, state, {
        notes: action.payload,
        filteredNotes: action.payload,
        fetching: false,
        error: ""
        // allTags: tagList
      });
    case ERROR:
      return Object.assign({}, state, { error: action.payload });
    case SUCCESS_SINGLE:
      // const strArr = action.payload.textBody.split(" ");
      // strArr.forEach(word => {
      //   if (word[0] === "#") {
      //     const tag = word.substr(1).trim();
      //     action.payload.tags.push(tag);
      //   }
      // });
      return Object.assign({}, state, {
        singleNote: action.payload,
        fetching: false,
        updating: false,
        error: ""
      });
    case UPDATE:
      return Object.assign({}, state, { updating: true });
    case FILTER:
      return Object.assign({}, state, { filteredNotes: action.payload });
    case SIGNIN:
      localStorage.setItem('jwt', action.payload.token);
      return Object.assign({}, state, { signedOut: false });
    default:
      return state;
  }
};
