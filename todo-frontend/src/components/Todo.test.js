import { Todo, TodoTitle, TodoContent } from 'components/Todo'
import { setup } from 'utils'

const mockProps = {
  title: 'roll around',
  content: 'bacon taco laie kama aina',
  id: 1
}

const { enzymeWrapper: todoWrapper } = setup(Todo, mockProps)
it('renders todo component', () => {
  expect(todoWrapper.find('Todo').exists()).toBe(true)
  expect(
    todoWrapper
      .find('Todo')
      .children()
      .find(TodoTitle)
      .text()
  ).toBe(mockProps.title)
  expect(
    todoWrapper
      .find('Todo')
      .children()
      .find(TodoContent)
      .text()
  ).toBe(mockProps.content)
})
