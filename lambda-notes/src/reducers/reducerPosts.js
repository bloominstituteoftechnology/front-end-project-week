import { ADD_POST, DELETE_POST } from '../actions';

initialState = {
  posts: [
      {
        id: 0,
        title: title,
        body: body
      }
  ]
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        posts: [
          ...state.posts,
          {
            title: action.payload.title,
            body: action.payload.body,
            id: null
          }
        ]
      };
    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter(each => {
          return each.id !== action.payload;
        }),
      };
    }
  }