/* eslint-disable no-case-declarations */

import React, { useEffect, useReducer } from 'react'
import { v4 as uuidv4 } from 'uuid'
import AddTodo from './AddTodo'
import todoReducer, { ACTIONS } from './reducers/todoReducer'
import './ToDo.css'
import TodoList from './TodoList'

const initialState = []

const init = () => {
  return JSON.parse(localStorage.getItem('todos')) || []
}

export default function ToDoApp() {
  const [todos, dispatch] = useReducer(todoReducer, initialState, init)
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])
  const editTodo = (newValue) => {
    const action = { type: ACTIONS.EDIT, payload: newValue }
    dispatch(action)
  }
  const deleteTodo = (id) => {
    const action = { type: ACTIONS.DELETE, payload: id }
    dispatch(action)
  }
  const addTodo = (todo = '') => {
    const action = {
      type: ACTIONS.ADD,
      payload: { id: uuidv4(), todo, done: false },
    }
    dispatch(action)
  }
  return (
    <div>
      <h1>{`ToDo (${todos.length})`}</h1>
      <hr />
      <div className="row">
        <TodoList
          todos={todos}
          dispatch={dispatch}
          editTodo={editTodo}
          deleteTodo={deleteTodo}
        />
        <AddTodo addTodo={addTodo} />
      </div>
    </div>
  )
}
