import { AddTodoForm, handleSubmit } from 'components/AddTodoForm'
import { setup } from 'utils'

const { enzymeWrapper: AddTodoFormWrapper } = setup(AddTodoForm)

it('has inputs', () => {
  expect(AddTodoFormWrapper.find('input').length).toBe(2)
})

const addedTodo = {
  title: 'a taco',
  constent: 'a bell'
}

describe('handleSubmit', () => {
  it('returns defaults when no inputs', () => {
    expect(handleSubmit({preventDefault: jest.fn()}).toBe(addedTodo)
    )
  })
})
