import React, { useState, useEffect } from 'react'
import './Header.scss'

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('hidden-overflow', toggleMenu);
  }, [toggleMenu])

  return (
    <header className='header'>
      <div className='shell'>
        <div className='header-inner'>
          <nav className={`${toggleMenu ? 'show' : ''}`}>
            <ul>
              <li><a onClick={() => setToggleMenu(!toggleMenu)} href='#home'>Home</a></li>
              <li><a onClick={() => setToggleMenu(!toggleMenu)} href='#about'>About</a></li>
              <li><a onClick={() => setToggleMenu(!toggleMenu)} href='#projects'>Projects</a></li>
              <li><a onClick={() => setToggleMenu(!toggleMenu)} href='#skills'>Skills</a></li>
              <li><a onClick={() => setToggleMenu(!toggleMenu)} href='#contacts'>Contacts</a></li>
            </ul>
          </nav>
          <div
            onClick={() => setToggleMenu(!toggleMenu)}
            className={`menu-btn ${toggleMenu ? 'show' : ''}`}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header