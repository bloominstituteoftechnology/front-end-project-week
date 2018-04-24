import React from 'react'
import { withRouter } from 'react-router'
import { Link, Route, Router, Switch } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import { render, Simulate } from './'

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

const leftClick = {button: 0};
const { container, getByText, getByPlaceholderText } = renderWithRouter(<App />);

test('I can see home page', () => {
  expect(container.innerHTML).toMatch('Your Notes')

});

test('I can create a new note', () => {
  Simulate.click(getByText('+ Create New Note'), leftClick)
  expect(container.innerHTML).toMatch('Create New Note')

  const titleInput = getByPlaceholderText('Note Title');
  const contentInput = getByPlaceholderText('Note Content');

  const testTitle = 'A Test Note';
  const testContent = 'Just a test.  Nothing to see. Move along.';

  titleInput.value = testTitle; 
  Simulate.change(titleInput);

  contentInput.value = testContent; 
  Simulate.change(contentInput);

  Simulate.click(getByText('Save'), leftClick)

  expect(container.innerHTML).toMatch(testTitle);
  expect(container.innerHTML).toMatch(testContent);
});
