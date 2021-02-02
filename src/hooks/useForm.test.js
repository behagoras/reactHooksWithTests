import { renderHook, act } from '@testing-library/react-hooks'
import useForm from './useForm'

describe('useForm tests', () => {
  const initialForm = {
    name: 'John',
    email: 'john@doe.com',
  }
  it('should return the default form', () => {
    const { result } = renderHook(() => useForm(initialForm))
    const [values, handleInputChange, reset] = result.current
    expect(values).toEqual(initialForm)
    expect(typeof handleInputChange).toBe('function')
    expect(typeof reset).toBe('function')
  })
  it('should change the form value (name)', () => {
    const { result } = renderHook(() => useForm(initialForm))
    const [, handleInputChange] = result.current
    act(() => {
      const event = { target: {
        value: 'David',
        name: 'name' },
      }
      handleInputChange(event)
    })
    const [values] = result.current
    expect(values).toEqual({
      ...initialForm,
      name: 'David',
    })
  })
  it('should reset the form', () => {
    const { result } = renderHook(() => useForm(initialForm))
    const [, handleInputChange, reset] = result.current
    act(() => {
      const event = { target: {
        value: 'David',
        name: 'name' },
      }
      handleInputChange(event)
      reset()
    })
    const [values] = result.current
    expect(values).toEqual(initialForm)
  })
})
