import React from 'react'

import useInput from '../../hooks/useInput'

export default function AddTodo({ addTodo }) {
  const [newToDo, handleNewToDo, reset] = useInput()
  const handleAddTodo = (e) => {
    e.preventDefault()
    if (newToDo.trim().length !== 0) addTodo(newToDo)
    reset()
  }
  return (
    <form className="addTodo" onSubmit={handleAddTodo}>
      <input
        type="text"
        placeholder="add to do"
        className="form-control"
        name="todo"
        value={newToDo}
        onChange={handleNewToDo}
      />
      <button
        type="submit"
        className="btn btn-primary"
      >
        Add todo
      </button>
    </form>
  )
}
