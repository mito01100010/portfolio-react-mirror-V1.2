import React from 'react'
import './About.scss'

const About = () => {
    return (
        <section id='about' className='about'>
            <div className='shell'>
                <div className='about-inner'>
                    <h2>About me</h2>

                    <div className='about-content'>
                        <div className='about-text'>
                            <p>
                                I am a passionate person with interest and desire to learn different web development technologies.
                                I'm a level B2 English speaker and level C1 introvert with self-irony and a sense of humor.
                            </p>
                        </div>

                        <figure className='about-image'>
                            <img src='./about-img.jpg' alt='' />
                        </figure>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About