import { App } from 'App'
import { setup } from 'utils'

// const thunk = ({ dispatch, getState }) => next => action => {
//   if (typeof action === 'function') {
//     return action(dispatch, getState)
//   }

//   return next(action)
// }

// const create = () => {
//   const store = {
//     getState: jest.fn(() => ({})),
//     dispatch: jest.fn()
//   }

//   const next = jest.fn()

//   const invoke = action => thunk(store)(next)(action)

//   return {store, next, invoke}
// }

const mockProps = {
  fetchTodos: jest.fn(),
  todos: []
}
const { enzymeWrapper } = setup(App, mockProps)

it('renders without crashing', () => {
  expect(enzymeWrapper.find('.App').hasClass('App')).toBe(true)
})

it('tries to fetch todos on mount', async () => {
  expect(mockProps.fetchTodos.mock.calls.length).toBe(1)
})
