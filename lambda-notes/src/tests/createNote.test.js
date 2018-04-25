import React from 'react'
import { withRouter } from 'react-router'
import { Link, Route, Router, Switch } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import { render, Simulate } from './'

import App from '../App';
import { testNotes } from './testData';

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

test('I can see notes list', () => {
  expect(container.innerHTML).toMatch('Your Notes')

  testNotes.forEach( note => {
    expect(container.innerHTML).toMatch(note.title);
  });
});

const testTitle = 'A Test Note';
const testContent = 'Just a test.  Nothing to see. Move along.';

test('I can create a new note', () => {
  Simulate.click(getByText('+ Create New Note'), leftClick)
  expect(container.innerHTML).toMatch('Create New Note')

  const titleInput = getByPlaceholderText('Note Title');
  const contentInput = getByPlaceholderText('Note Content');

  titleInput.value = testTitle; 
  Simulate.change(titleInput);

  contentInput.value = testContent; 
  Simulate.change(contentInput);

  Simulate.click(getByText('Save'), leftClick)

  expect(container.innerHTML).toMatch(testTitle);
  expect(container.innerHTML).toMatch(testContent);
});

test('I can view a note', () => {
  Simulate.click(getByText(testTitle), leftClick)

  expect(container.innerHTML).toMatch('Edit');
  expect(container.innerHTML).toMatch(testTitle);
});

const testChangeTitle = 'Changed Test Note';
const testChangeContent = 'Just a test for change.  Nothing to see. Move along.';

test('I can edit a note', () => {

  Simulate.click(getByText(testTitle), leftClick)
  expect(container.innerHTML).toMatch('Edit');

  Simulate.click(getByText('Edit'), leftClick)
  expect(container.innerHTML).toMatch('Edit Note:');
  expect(container.innerHTML).toMatch(testTitle);
  expect(container.innerHTML).toMatch(testContent);

  const titleInput = getByPlaceholderText('Note Title');
  const contentInput = getByPlaceholderText('Note Content');

  titleInput.value = testChangeTitle; 
  Simulate.change(titleInput);

  contentInput.value = testChangeContent; 
  Simulate.change(contentInput);

  Simulate.click(getByText('Save'), leftClick)
  expect(container.innerHTML).toMatch('Your Notes:');

  expect(container.innerHTML).toMatch(testChangeTitle);
  expect(container.innerHTML).toMatch(testChangeContent);

});

test('I can delete a note', () => {
  Simulate.click(getByText(testChangeTitle), leftClick)
  expect(container.innerHTML).toMatch('Delete');

  Simulate.click(getByText('Delete'), leftClick)
  expect(container.innerHTML).toMatch('Your Notes:');

  expect(container.innerHTML).not.toMatch(testChangeTitle);
  expect(container.innerHTML).not.toMatch(testChangeContent);
});
