import React from 'react'

export default function TodoListItem({ todo = {}, editTodo, deleteTodo }) {

  return (
    <li key={todo.id} className="list-group-item">
      <input
        type="checkbox"
        name="done"
        id="done"
        checked={todo.done}
        className="form-check-input"
        onChange={(e) => editTodo({ id: todo.id, done: e.target.checked })}
      />
      <input
        type="text"
        name="todo"
        id="todo"
        value={todo.todo}
        className={`form-control todo ${todo.done ? 'complete' : ''}`}
        placeholder="Add your todo description"
        onChange={(e) => editTodo({ id: todo.id, todo: e.target.value })}
      />
      <div className="col-5">
        <button type="button" className="btn btn-outline-primary" onClick={() => deleteTodo(todo.id)}>-</button>
      </div>
    </li>
  )
}
