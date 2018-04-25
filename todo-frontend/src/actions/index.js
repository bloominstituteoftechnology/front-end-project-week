import { get } from 'axios/dist/axios'

export const FETCHINGTODOS = 'FETCHINGTODOS'
export const TODOSFETCHED = 'TODOSFETCHED'
export const CREATINGTODO = 'CREATINGTODO'
export const TODOCREATED = 'TODOCREATED'
export const UPDATINGTODO = 'UPDATINGTODO'
export const TODOUPDATED = 'TODOUPDATED'
export const ERROR = 'ERROR'

const ApiUrl = '/api/todos'

export const fetchTodos = () => async dispatch => {
  await dispatch({ type: FETCHINGTODOS })
  try {
    const { data } = await get(ApiUrl)
    await dispatch({ type: TODOSFETCHED, payload: data })
  } catch (error) {
    await dispatch({ type: ERROR, payload: 'oops' })
  }
}
