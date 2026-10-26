import React from 'react'
import { NavLink } from 'react-router-dom'

import Group from '../assets/Group.png'

const Header = () => {
  return (
    <header>
      <h2>Pizzashop</h2>

      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>

        <li>
          <NavLink to="/menu">Menu</NavLink>
        </li>

        <li>
          <NavLink to="/events">Events</NavLink>
        </li>
      </ul>

      <ul>
        <li>
          <NavLink to="/login">Login in</NavLink>
        </li>

        <li>
          <NavLink to="/cart">
            <img src={Group} alt="Cart" />
          </NavLink>
        </li>
      </ul>
    </header>
  )
}

export default Header