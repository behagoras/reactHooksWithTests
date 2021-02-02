import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import Menu from './components/Menu'

import router from './components/router'

import './App.css'

export default function BasicExample() {
  return (
    <div className="App">
      <Router>
        <Menu />
        <hr />
        <Switch>
          {router.map((route) => (
            <Route
              exact={route.exact}
              path={route.route}
            >
              <route.component />
            </Route>
          ))}
          <Redirect to="/" />
        </Switch>
        <hr />
      </Router>
    </div>
  )
}
