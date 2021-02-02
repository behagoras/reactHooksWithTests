import React from 'react'
import { useHistory } from 'react-router-dom'
import { useUserContext } from './UserContext'

export default function LoginScreen() {
  const { setUser } = useUserContext()
  const history = useHistory()
  const handleLogin = (e) => {
    setUser({
      id: 1,
      name: 'David',
      email: 'davbelom@gmail.com',
    })
    history.push('/reducer/')
  }
  return (
    <div>
      <h1>Login Screen</h1>
      <hr />
      <button
        type="button"
        className="btn btn-primary"
        onClick={handleLogin}
      >
        Set user
      </button>
    </div>
  )
}
