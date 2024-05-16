import React from 'react'
import './Header.scss'

const Header = () => {
  return (
    <header className='header'>
      <div className='shell'>
        <nav>
          <ul>
            <li><a href=''>Home</a></li>
            <li><a href=''>About</a></li>
            <li><a href=''>Projects</a></li>
            <li><a href=''>Skills</a></li>
            <li><a href=''>Contacts</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header