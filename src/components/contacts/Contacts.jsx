import React from 'react'
import './Contacts.scss'

const Contacts = () => {
    return (
        <section id='contacts' className='contacts'>
            <div className='shell'>
                <h2>Let's work together...</h2>
                <div className='contacts-inner'>
                    <a href='https://www.linkedin.com/in/dimitar-pashkulev/' target='_blank'>
                        <i className='fab fa-linkedin'></i>
                        <span>Linkedin</span>
                    </a>
                    <a href='https://github.com/mito01100010' target='_blank'>
                        <i class='fab fa-github'></i>
                        <span>Github</span>
                    </a>
                    <a href='mailto:mito0110010@gmail.com' target='_blank'>
                        <i class='fas fa-envelope'></i>
                        <span>Email</span>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Contacts