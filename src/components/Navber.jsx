import React from 'react'
import {Link} from 'react-router-dom'

const Navber = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/Member1">Menber1</Link>
      <Link to="/Member2">Menber2</Link>
      <Link to="/Member3">Menber3</Link>
      <Link to="/Member4">Menber4</Link>
    </div>
  )
}

export default Navber
