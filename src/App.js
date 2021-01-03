import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom'
import CounterApp from './components/01-useState/CounterApp'
import CounterWithCustomHook from './components/01-useState/CounterWithCustomHook'

export default function BasicExample() {
  return (
    <Router>
      <>
        <Switch>
          <Route exact path="/">
            <h2>Navigate to exercises</h2>
          </Route>
          <Route path="/counterApp">
            <CounterApp />
          </Route>
          <Route path="/counterWithCustomHook">
            <CounterWithCustomHook />
          </Route>
        </Switch>

        <hr />
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/counterApp">CounterApp</Link>
          </li>
          <li>
            <Link to="/counterWithCustomHook">CounterWithCustomHook</Link>
          </li>
        </ul>
      </>
    </Router>
  )
}
