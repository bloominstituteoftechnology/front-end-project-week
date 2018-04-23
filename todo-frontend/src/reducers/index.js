import { FETCHINGTODOS, TODOSFETCHED, ERROR } from 'actions'

const initialState = {
  fetchingTodos: false,
  error: null,
  todos: []
}

export const todosReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCHINGTODOS:
      return Object.assign({}, state, {
        fetchingTodos: true
      })
    case TODOSFETCHED:
      return Object.assign({}, state, {
        fetchingTodos: false,
        todos: [...payload]
      })
    case ERROR:
      return Object.assign({}, state, {
        error: payload,
        fetchingTodos: false
      })
    default:
      return state
  }
}
