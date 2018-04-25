import { setup } from 'utils'
import { TodoList } from 'components/TodoList'

const mockProps = {
  todos: [
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

const { enzymeWrapper: TodoListWrapper } = setup(TodoList, mockProps)

it('renders correct amount of todos', () => {
  expect(TodoListWrapper.find('Todo').getElements().length).toBe(3)
})
