import React from 'react'
import './Header.scss'

const Header = () => {
  return (
    <header className='header'>
      <div className='shell'>
        <nav>
          <ul>
            <li><a href='#home'>Home</a></li>
            <li><a href='#about'>About</a></li>
            <li><a href='#projects'>Projects</a></li>
            <li><a href='#skills'>Skills</a></li>
            <li><a href='#contacts'>Contacts</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header