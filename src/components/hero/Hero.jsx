import React from 'react'
import './Hero.scss'
import Header from './../header/Header'

const Hero = () => {
  return (
    <section className='hero'>
      <Header />

      <figure className='hero-image'>
        <img src='./hero.jpg' alt='' />
      </figure>

      <div className='hero-inner'>
        <div className='shell'>
          <div className='hero-text'>
            <h1>Hello there,</h1>

            <h2>
              My name is Dimitar
              I'm into Web Development
            </h2>

            <a href='#about'>About me</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero