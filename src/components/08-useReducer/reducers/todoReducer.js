export const ACTIONS = {
  ADD: 'add',
  EDIT: 'edit',
  DELETE: 'delete',
}

export default function todoReducer(state, action) {
  switch (action.type) {
    case ACTIONS.ADD:
      return [...state, action.payload]
    case ACTIONS.EDIT:
      return state.map((todo) => ((todo.id === action.payload.id) ?
        { ...todo, ...action.payload } :
        todo
      ))
    case ACTIONS.DELETE:
      return state.filter((todo) => todo.id !== action.payload)
    default:
      return state
  }
}
