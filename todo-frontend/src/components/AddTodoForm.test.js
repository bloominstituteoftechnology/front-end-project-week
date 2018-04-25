import { AddTodoForm, handleSubmit } from 'components/AddTodoForm'
import { setup } from 'utils'

const { enzymeWrapper: AddTodoFormWrapper } = setup(AddTodoForm)

it('has inputs', () => {
  expect(AddTodoFormWrapper.find('input').length).toBe(2)
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
    AddTodoFormWrapper.find('.ATF--input')
  })
})
