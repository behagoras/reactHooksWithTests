import React from 'react'
import { Link } from 'react-router-dom'
import router from './router'
import './Menu.css'

export default function Menu() {
  return (
    <ul className="Menu">
      {router.map((route) => (
        <li>
          <Link
            to={route.route}
          >
            {route.text}
          </Link>
        </li>
      ))}
    </ul>
  )
}
