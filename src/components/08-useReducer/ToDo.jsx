/* eslint-disable no-case-declarations */

import React, { useEffect, useReducer } from 'react'
import { v4 as uuidv4 } from 'uuid'
import useInput from '../../hooks/useInput'
import './ToDo.css'

const initialState = []

const init = () => {
  return JSON.parse(localStorage.getItem('todos')) || []
}

const todoReducer = (state, action) => {
  switch (action.type) {
    case 'add':
      return [...state, action.payload]
    case 'edit':
      return state.map((todo) => ((todo.id === action.payload.id) ?
        { ...todo, ...action.payload } :
        todo
      ))
    case 'delete':
      return state.filter((toDo) => toDo.id !== action.payload)
    default:
      return state
  }
}

export default function ToDo() {
  const [toDos, dispatch] = useReducer(todoReducer, initialState, init)
  const [newToDo, handleNewToDo] = useInput()
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(toDos))
  }, [toDos])
  const addTodo = (toDo = '') => {
    const action = {
      type: 'add',
      payload: { id: uuidv4(), toDo, done: false },
    }
    dispatch(action)
  }
  const deleteTodo = (id) => {
    const action = { type: 'delete', payload: id }
    dispatch(action)
  }
  const editTodo = (newValue) => {
    const action = { type: 'edit', payload: newValue }
    dispatch(action)
  }

  return (
    <div>
      <h1>{`ToDo (${toDos.length})`}</h1>
      <hr />
      <div className="row">
        <div className="row col-12">
          <ul className="list-group list-group-flush col-7">
            {toDos.map((toDo, i) => (
              <li key={toDo.id} className="list-group-item">
                <input
                  type="checkbox"
                  name="done"
                  id="done"
                  checked={toDo.done}
                  className="form-check-input"
                  onChange={(e) => editTodo({ id: toDo.id, done: e.target.checked })}
                />
                <input
                  type="text"
                  name="toDo"
                  id="toDo"
                  value={toDo.toDo}
                  className={`form-control todo ${toDo.done ? 'complete' : ''}`}
                  placeholder="Add your todo description"
                  onChange={(e) => editTodo({ id: toDo.id, toDo: e.target.value })}
                />
                <div className="col-5">
                  <button type="button" className="btn btn-outline-primary" onClick={() => deleteTodo(toDo.id)}>-</button>
                </div>
              </li>
            ))}
          </ul>
          <form
            className="addTodo"
            onSubmit={(e) => {
              e.preventDefault()
              if (newToDo.trim().length !== 0)addTodo(newToDo)
            }}
          >
            <input
              type="text"
              placeholder="add to do"
              className="form-control"
              name="todo"
              value={newToDo}
              onChange={handleNewToDo}
            />
            <button type="submit" className="btn btn-primary">
              Add toDo
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
