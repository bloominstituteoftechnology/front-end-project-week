import React from 'react'
import { mount } from 'enzyme'
import { MemoryRouter } from 'react-router'
import { App } from 'App'

/* eslint-disable */
import { setup } from 'utils' // leaving this in scope allows pre-adapted enzyme to stay in scope
/* eslint-enable */

const mockProps = {
  fetchTodos: jest.fn(),
  notes: []
}
// const { enzymeWrapper } = setup(App, mockProps)

const enzymeWrapper = mount(
  <MemoryRouter initialEntries={['/']}>
    <App {...mockProps} />
  </MemoryRouter>
)

enzymeWrapper.setState({ notes: [] })

it('renders without crashing', () => {
  expect(enzymeWrapper.find('App').exists()).toBe(true)
})
