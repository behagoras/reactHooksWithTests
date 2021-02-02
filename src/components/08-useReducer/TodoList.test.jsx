import React from 'react'
import { shallow } from 'enzyme'
import TodoList from './TodoList'
import { todosFixture } from '../../fixtures/todoFixtures'
import TodoListItem from './TodoListItem'

describe('<TodoList />', () => {
  let component = shallow(<TodoList />)
  const editTodo = jest.fn()
  const deleteTodo = jest.fn()
  it('should render correctly', () => {
    component = shallow(<TodoList
      todos={todosFixture}
      editTodo={editTodo}
      deleteTodo={deleteTodo}
    />)
    expect(component).toMatchSnapshot()
  })
  it('should render the correct quantity of elements', () => {
    const toDoListItem = component.find(TodoListItem)
    const firstTodo = toDoListItem.at(0)

    expect(toDoListItem.length).toBe(todosFixture.length)

    expect(firstTodo.prop('deleteTodo')).toBe(deleteTodo)
    expect(firstTodo.prop('editTodo')).toBe(editTodo)
  })
})
