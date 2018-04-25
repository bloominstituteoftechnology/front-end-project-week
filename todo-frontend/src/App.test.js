import React from 'react'
import { mount } from 'enzyme'
import { MemoryRouter } from 'react-router'
import { App } from 'App'

/* eslint-disable */
import { setup } from 'utils' // leaving this in scope allows pre-adapted enzyme to stay in scope
/* eslint-enable */

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
// const { enzymeWrapper } = setup(App, mockProps)

const enzymeWrapper = mount(
  <MemoryRouter initialEntries={['/']}>
    <App {...mockProps} />
  </MemoryRouter>
)

it('renders without crashing', () => {
  expect(enzymeWrapper.find('App').exists()).toBe(true)
})

it('tries to fetch todos on mount', async () => {
  expect(mockProps.fetchTodos.mock.calls.length).toBe(1)
})
