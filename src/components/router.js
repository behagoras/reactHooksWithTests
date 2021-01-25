import React from 'react'
import CounterApp from './01-useState/CounterApp'
import CounterWithCustomHook from './01-useState/CounterWithCustomHook'
import FormWithCustomHook from './02-useEffect/FormWithCustomHook'
import SimpleForm from './02-useEffect/SimpleForm'
import MultipleCustomHooks from './03-examples/MultipleCustomHooks'
import FocusScreen from './04-useRef/FocusScreen'
import RealExampleRef from './04-useRef/RealExampleRef'
import Layout from './05-useLayoutEffect/Layout'
import MemoHook from './06-memos/MemoHook'
import Memorize from './06-memos/Memorize'
import Parent from './07-memo/Parent'
import ToDo from './08-useReducer/ToDo'

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
  {
    route: '/focusScreen',
    text: 'focusScreen',
    component: FocusScreen,
    exact: false,
  },
  {
    route: '/RealExampleRef',
    text: 'RealExampleRef',
    component: RealExampleRef,
    exact: false,
  },
  {
    route: '/Layout',
    text: 'Layout',
    component: Layout,
    exact: false,
  },
  {
    route: '/Memorize',
    text: 'Memorize',
    component: Memorize,
    exact: false,
  },
  {
    route: '/MemoHook',
    text: 'MemoHook',
    component: MemoHook,
    exact: false,
  },
  {
    route: '/Parent',
    text: 'Parent',
    component: Parent,
    exact: false,
  },
  {
    route: '/ToDoApp',
    text: 'ToDoApp',
    component: ToDo,
    exact: false,
  },
]

export default router
