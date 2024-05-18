import React from 'react'
import './Skills.scss'
import skills from '../../data/skillsData'
import certificates from '../../data/certificatesData'

const Skills = () => {
    return (
        <section id='skills' className='skills'>
            <div className='shell'>
                <div className='skills-inner'>
                    <div>
                        <h4>Some technologies I've worked with</h4>
                        <div className='skills-content'>
                            {skills.map(item => (
                                <figure>
                                    <img src={`./${item.image}`} alt='' />
                                    <span>{item.name}</span>
                                </figure>
                            ))}
                        </div>
                    </div>
                    <div className='certificates'>
                        <h4>Certificates</h4>
                        {certificates.map(item => (
                            <a href={item.url} target='_blank'>
                                <figure>
                                    <img src={'./' + item.image} alt='' />
                                </figure>

                                <span>{item.title}</span>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills