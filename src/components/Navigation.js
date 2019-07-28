import React from 'react'
import { Link } from 'gatsby'

const Navigation = () => {
  return (
    <div>
      <h2>Sk Arif</h2>
      <ul>
        <li><Link to='/about'>About me</Link></li>
        <li><Link to='/blog'>Blog</Link></li>
        <li><Link to='/contact'>Contact</Link></li>
      </ul>
    </div>
  )
}

export default Navigation