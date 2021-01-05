/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react'
import useInput from '../../hooks/useInput'
import './Form.css'

export default function FormWithCustomHook() {
  const [name, nameChange] = useInput()
  const [email, emailChange] = useInput()
  const [password, passwordChange] = useInput()
  const formValues = { name, email, password }
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formValues)
  }
  return (
    <form onSubmit={handleSubmit}>
      <h1>useEffect with custom hook</h1>
      <div className="form-group">
        <label>
          {'Name:  '}
          <input
            type="text"
            name="name"
            className="form-control"
            placeholder="Your name"
            value={name}
            onChange={nameChange}
          />
        </label>
        <br />
        <label>
          {'Email:  '}
          <input
            type="text"
            name="email"
            className="form-control"
            placeholder="Your email"
            value={email}
            onChange={emailChange}
          />
        </label>
        <label>
          {'Password:  '}
          <input
            type="password"
            name="password"
            className="form-control"
            placeholder="********"
            value={password}
            onChange={passwordChange}
          />
        </label>
      </div>
      <button type="submit" className="btn btn-primary">Save</button>
    </form>
  )
}
