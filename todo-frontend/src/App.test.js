import React from 'react'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { App } from 'App'

Enzyme.configure({ adapter: new Adapter() })

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

function setup () {
  const props = {
    fetchTodos: jest.fn()
  }

  const enzymeWrapper = mount(<App {...props} />)

  return {
    props,
    enzymeWrapper
  }
}

it('renders without crashing', () => {
  const { enzymeWrapper } = setup()

  expect(enzymeWrapper.find('div').hasClass('App')).toBe(true)
})

it('tries to fetch todos on mount', async () => {
  const { props } = setup()
  expect(props.fetchTodos.mock.calls.length).toBe(1)
})
