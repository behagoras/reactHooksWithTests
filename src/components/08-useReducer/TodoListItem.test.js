import { shallow } from 'enzyme'
import React from 'react'
import { todoFixture } from '../../fixtures/todoFixtures'
import TodoListItem from './TodoListItem'

const editTodo = jest.fn()
const deleteTodo = jest.fn()

describe('<TodoListItem />', () => {
  let component = shallow(<TodoListItem
    todo={todoFixture}
    editTodo={editTodo}
    deleteTodo={deleteTodo}
  />)

  beforeEach(() => {
    component = shallow(<TodoListItem
      todo={todoFixture}
      editTodo={editTodo}
      deleteTodo={deleteTodo}
    />)
  })

  it('should render correctly', () => {
    expect(component).toMatchSnapshot()
  })

  it('should call delete function ', () => {
    component.find('button').simulate('click')
    expect(deleteTodo).toHaveBeenCalledTimes(1)
    expect(deleteTodo).toHaveBeenCalledWith(todoFixture.id)
  })

  it('should call edit function ', () => {
    const value = 'new value'
    component
      .find('.todo')
      .simulate('change', { target: { value } })
    expect(editTodo).toHaveBeenCalledTimes(1)
    expect(editTodo).toHaveBeenCalledWith({
      id: todoFixture.id,
      todo: value,
    })
  })

  it('should render the correct input text', () => {
    expect(
      component
        .find('.todo')
        .prop('value'),
    )
      .toBe(todoFixture.todo)
  })

  it('should have the complete class if TODO.done', () => {
    const todo = { ...todoFixture, done: true }
    component = shallow(<TodoListItem
      todo={todo}
      editTodo={editTodo}
      deleteTodo={deleteTodo}
    />)
    expect(component.find('.todo').hasClass('complete')).toBeTruthy()
  })

  it('should not have the complete class if not TODO.done', () => {
    const todo = { ...todoFixture, done: false }
    component = shallow(<TodoListItem
      todo={todo}
      editTodo={editTodo}
      deleteTodo={deleteTodo}
    />)
    expect(component.find('.todo').hasClass('complete')).toBeFalsy()
  })
})
