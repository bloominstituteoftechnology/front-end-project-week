import {Todo} from 'components/Todo'
import {setup} from 'utils'

const mockProps = {
  title: 'roll around',
  content: 'bacon taco laie kama aina',
  id: 1
}

const { enzymeWrapper: todoWrapper } = setup(Todo, mockProps)
it('renders todo component', () => {
  expect(todoWrapper.find('div').hasClass('Todo')).toBe(true)
  expect(todoWrapper.find('.Todo--title').text()).toBe(mockProps.title)
  expect(todoWrapper.find('.Todo--content').text()).toBe(mockProps.content)
})
