import React from 'react'
import {withRouter} from 'react-router'
import {Link, Route, Router, Switch} from 'react-router-dom'
import {createMemoryHistory} from 'history'
import {render, Simulate} from './'

import App from '../App';

// based off https://github.com/kentcdodds/react-testing-library/blob/master/src/__tests__/react-router.js

// this is a handy function that I would utilize for any component
// that relies on the router being in context
function renderWithRouter(
  ui,
  {route = '/', history = createMemoryHistory({initialEntries: [route]})} = {},
) {
  return {
    ...render(<Router history={history}>{ui}</Router>),
    // adding `history` to the returned utilities to allow us
    // to reference it in our tests (just try to avoid using
    // this to test implementation details).
    history,
  }
}


test('full app rendering/navigating', () => {
  const {container, getByText} = renderWithRouter(<App />)
  // normally I'd use a data-testid, but just wanted to show this is also possible
  expect(container.innerHTML).toMatch('Your Notes')
  const leftClick = {button: 0}
  Simulate.click(getByText('+ Create New Note'), leftClick)
  // normally I'd use a data-testid, but just wanted to show this is also possible
  expect(container.innerHTML).toMatch('Create New Note')
})
