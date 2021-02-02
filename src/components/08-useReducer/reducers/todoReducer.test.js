import { todosFixture } from '../../../fixtures/todoFixtures'
import todoReducer, { ACTIONS } from './todoReducer'

describe('todoReducer', () => {
  it('should return current state (default)', () => {
    const newState = todoReducer(todosFixture, {})
    expect(newState).toEqual(todosFixture)
  })
  it('should add new todo', () => {
    const payload = 'NEW TODO'
    const newState = todoReducer(todosFixture, {
      type: ACTIONS.ADD,
      payload,
    })
    expect(newState).toEqual([...todosFixture, payload])
    expect(newState.length).toEqual(todosFixture.length + 1)
  })
  it('should edit TODO', () => {
    const id = '123'
    const todo = 'EDITED TODO'
    const newState = todoReducer(todosFixture, {
      type: ACTIONS.EDIT,
      payload: { id, todo },
    })
    expect(
      newState
        .filter((t) => t.id === id && t.todo === todo)
        .length,
    ).toBe(1)
  })
  it('should delete TODO', () => {
    const payload = '123'
    const newState = todoReducer(todosFixture, {
      type: ACTIONS.DELETE,
      payload,
    })
    expect(newState.length).toBe(todosFixture.length - 1)
  })
})
