import { setup } from 'utils'
import { NoteList } from 'components/NoteList'

const mockProps = {
  notes: [
    {
      id: 1,
      title: 'cooper why',
      content: 'how for make do thing of like yes'
    },
    {
      id: 2,
      title: 'keisha russian',
      content: 'nothing really catch the back seat keisha song'
    },
    {
      id: 3,
      title: 'all along beach boulevard',
      content: 'dog hair down flagon bacon lamp'
    }
  ]
}

const { enzymeWrapper: NoteListWrapper } = setup(NoteList, mockProps)

it('renders correct amount of notes', () => {
  expect(NoteListWrapper.find('Note').getElements().length).toBe(3)
})
