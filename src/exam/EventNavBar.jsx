import React from 'react'
import { Link } from 'react-router-dom'
import EventUsers from './EventUsers';

export default function EventNavBar() {
  return (
      <nav className="navbar">

      <h2>React App</h2>

      <div>
        <Link to="/home">Home</Link>
        <Link to="/">EventRegistation</Link>
        <Link to="/eventusers">EventUsers</Link>
        <Link to="/apidemo">API Data</Link>
        
      </div>

    </nav>
  )
}
