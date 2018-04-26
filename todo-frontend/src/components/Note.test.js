import { Note, NoteTitle, NoteContent } from 'components/Note'
import { setup } from 'utils'

const mockProps = {
  title: 'roll around',
  content: 'bacon taco laie kama aina',
  id: 1
}

const { enzymeWrapper: noteWrapper } = setup(Note, mockProps)
it('renders note component', () => {
  expect(noteWrapper.find('Note').exists()).toBe(true)
  expect(
    noteWrapper
      .find('Note')
      .children()
      .find(NoteTitle)
      .text()
  ).toBe(mockProps.title)
  expect(
    noteWrapper
      .find('Note')
      .children()
      .find(NoteContent)
      .text()
  ).toBe(mockProps.content)
})
