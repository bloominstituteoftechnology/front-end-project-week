import { AddNoteForm, handleSubmit } from 'components/AddNoteForm'
import { setup } from 'utils'

const { enzymeWrapper: AddNoteFormWrapper } = setup(AddNoteForm)

it('has inputs', () => {
  expect(AddNoteFormWrapper.find('input').length).toBe(2)
})

const nodesMock = {
  title: 'Title',
  content: 'Content'
}

describe('handleSubmit', () => {
  const mockReducer = jest.fn()
  it('returns defaults when no inputs', () => {
    handleSubmit(mockReducer, nodesMock)
    expect(mockReducer).toHaveBeenCalled()
  })

  it('returns values input', () => {
    AddNoteFormWrapper.find('.ATF--input')
  })
})
