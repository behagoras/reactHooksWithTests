import React from 'react'
import TodoListItem from './TodoListItem'

export default function TodoList({ todos = [], editTodo, deleteTodo }) {

  return (
    <ul className="list-group list-group-flush col-7">
      {todos.map((todo) => (<TodoListItem todo={todo} key={todo.id} editTodo={editTodo} deleteTodo={deleteTodo} />))}
    </ul>
  )
}
