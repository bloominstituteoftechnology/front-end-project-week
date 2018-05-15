import {
  LISTEN_START,
  LISTEN_STOP,
  ADD_SPEECH_TO_REGISTER,
  CLEAR_SPEECH_REGISTER,
} from './types'

export const startListening = () => ({ type: LISTEN_START })
export const stopListening = () => ({ type: LISTEN_STOP })
export const clearRegister = () => ({ type: CLEAR_SPEECH_REGISTER })

export const addToRegister = transcript => ({
  type: ADD_SPEECH_TO_REGISTER,
  payload: transcript
})

