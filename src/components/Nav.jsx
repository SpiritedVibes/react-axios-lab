import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/starships">Starships</Link>
      <Link to="/films">Films</Link>
      <Link to="/planets">Planets</Link>
      <Link to="/characters">Characters</Link>
    </nav>
  )
}

export default Nav