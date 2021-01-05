/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from 'react'
import Message from './Message'

export default function SimpleForm() {

  const [formState, setFormState] = useState({
    name: '',
    email: '',
  })
  const { name, email } = formState

  useEffect(() => {
  }, [])

  const handleInputChange = (e) => setFormState({
    ...formState,
    [e.target.name]: e.target.value,
  })

  return (
    <>
      <h1>useEffect</h1>
      <div className="form-group">
        <label>
          {'Name:  '}
          <input
            type="text"
            name="name"
            className="form-control"
            placeholder="Your name"
            value={name}
            onChange={handleInputChange}
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
            onChange={handleInputChange}
          />
        </label>
      </div>
      {name === '123' && <Message />}
    </>
  )
}
