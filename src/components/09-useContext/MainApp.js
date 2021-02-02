import React, { useState } from 'react'
import {
  BrowserRouter as Router,
} from 'react-router-dom'
import RouterSwitch from './RouterSwitch'
import NavBar from './NavBar'
import { UserContext } from './UserContext'

export default function MainApp() {
  const [user, setUser] = useState({})
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Router>
        <RouterSwitch />
        <NavBar />
      </Router>
    </UserContext.Provider>
  )
}
