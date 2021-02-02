import React from 'react'
import {
  Route,
  Switch,
} from 'react-router-dom'
import AboutScreen from './AboutScreen'
import HomeScreen from './HomeScreen'
import LoginScreen from './LoginScreen'

export default function App() {
  return (
    <Switch>
      <Route path="/reducer/about" component={AboutScreen} exact />
      <Route path="/reducer/login" component={LoginScreen} exact />
      <Route path="/reducer/" component={HomeScreen} exact />
    </Switch>
  )
}
