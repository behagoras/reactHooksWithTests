
const initialState = [{
  id: 1,
  todo: 'Buy something',
  done: false,
}]

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'add':
      return [...state, action.payload]
    default:
      return state
  }

}

let todos = todoReducer(initialState, '')

const payloadAddTodo = {
  id: 2,
  todo: 'Buy something else',
  done: false,
}

const addTodoAction = {
  type: 'add',
  payload: payloadAddTodo,
}

todos = todoReducer(initialState, addTodoAction)

console.log('file: intro-reducer.js ~ line 32 ~ todos', todos)
