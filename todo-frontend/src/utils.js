import React from 'react'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

export function setup(Comp, props) {
  const enzymeWrapper = mount(<Comp {...props} />)

  return {
    enzymeWrapper
  }
}

export const getSingleTodo = (id, todos) => {
  const todo = todos.filter(cur => +cur.id === +id)
  return todo[0]
}
