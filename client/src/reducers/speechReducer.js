import {
  LISTEN_START,
  LISTEN_STOP,
  ADD_SPEECH_TO_REGISTER,
  CLEAR_SPEECH_REGISTER,
} from '../actions/types'

const defaultState = {
  isListening: false,
  register: [],
}

export const speechReducer = (state = defaultState, action) => {
  switch (action.type) {
    case LISTEN_START:
      return { ...state, isListening: true }
    case LISTEN_STOP:
      return { ...state, isListening: false }
    case ADD_SPEECH_TO_REGISTER:
      return {
        ...state,
        isListening: false,
        register: [...state.register, action.payload],
      }
    case CLEAR_SPEECH_REGISTER:
      return { ...state, register: [] }
    default:
      return state
  }
}
