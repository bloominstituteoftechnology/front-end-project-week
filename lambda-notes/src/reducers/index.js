import {
  FETCHING_NOTES,
  FETCHING_NOTES_SUCCESSFUL,
  FETCHING_NOTES_FAILURE
} from "../actions";

const initialState = {
  notes: [
    {
      tags: [],
      _id: "5ba8145811b7c40014cb7abf",
      title: "Note Title",
      textBody: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate modi recusandae ad nemo, similique illo earum non excepturi aspernatur aliquam saepe quas eaque ratione illum sunt adipisci cupiditate, ab dolore?",
    },
    {
      tags: [],
      _id: "5ba818fc11b7c40014cb7ac2",
      title: "Note Title",
      textBody: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate modi recusandae ad nemo, similique illo earum non excepturi aspernatur aliquam saepe quas eaque ratione illum sunt adipisci cupiditate, ab dolore?",
    },
    {
      tags: [],
      _id: "5ba903d1d7042d0014318b47",
      title: "Note Title.",
      textBody: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate modi recusandae ad nemo, similique illo earum non excepturi aspernatur aliquam saepe quas eaque ratione illum sunt adipisci cupiditate, ab dolore?",
    },
    {
      tags: [],
      _id: "5ba80b2a11b7c40014cb7ab1",
      title: "Note Title",
      textBody: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate modi recusandae ad nemo, similique illo earum non excepturi aspernatur aliquam saepe quas eaque ratione illum sunt adipisci cupiditate, ab dolore?",
    },
    {
      tags: [],
      _id: "5ba80b2d11b7c40014cb7ab2",
      title: "Note Title",
      textBody: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate modi recusandae ad nemo, similique illo earum non excepturi aspernatur aliquam saepe quas eaque ratione illum sunt adipisci cupiditate, ab dolore?",
    }
  ],
  isFetching: false,
  fetched: true,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_NOTES:
      return Object.assign({}, state, { isFetching: true });
    case FETCHING_NOTES_SUCCESSFUL:
      return Object.assign({}, state, {
        notes: [...state.notes, ...action.payload],
        isFetching: false,
        fetched: true
      });
    case FETCHING_NOTES_FAILURE:
      return Object.assign({}, state, {
        error: action.payload,
        fetched: false,
        isFetching: false
      });
    default:
      return state;
  }
};
