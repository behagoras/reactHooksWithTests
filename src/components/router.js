import React from 'react'
import CounterApp from './01-useState/CounterApp'
import CounterWithCustomHook from './01-useState/CounterWithCustomHook'
import FormWithCustomHook from './02-useEffect/FormWithCustomHook'
import SimpleForm from './02-useEffect/SimpleForm'
import MultipleCustomHooks from './03-examples/MultipleCustomHooks'

const router = [
  {
    route: '/',
    text: 'Home',
    component: () => (<h1>Navigate to exercises</h1>),
    exact: true,
  },
  {
    route: '/counterApp',
    text: 'CounterApp',
    component: CounterApp,
    exact: false,
  },
  {
    route: '/counterWithCustomHook',
    text: 'counterWithCustomHook',
    component: CounterWithCustomHook,
    exact: false,
  },
  {
    route: '/simpleForm',
    text: 'simpleForm',
    component: SimpleForm,
    exact: false,
  },
  {
    route: '/formWithCustomHook',
    text: 'formWithCustomHook',
    component: FormWithCustomHook,
    exact: false,
  },
  {
    route: '/multipleCustomHooks',
    text: 'multipleCustomHooks',
    component: MultipleCustomHooks,
    exact: false,
  },
]

export default router
