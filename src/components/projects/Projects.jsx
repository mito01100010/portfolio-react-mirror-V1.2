import React from 'react'
import './Projects.scss'

const projects = [
    {
        id: 1,
        title: 'Warehouse',
        img: './warehouse.png',
        desc: 'Full stack web application created with React, NodeJS, express and MySQL Intended for managing warehouse products.',
        sourceCode: 'https://github.com/mito01100010/warehouse-public',
        liveURL: '',
    },
    {
        id: 2,
        title: 'FreeCodeCamp Portfolio Task',
        img: 'fcc-portfolio.JPG',
        desc: 'A fake portfolio. Created to meet the requirements of the freeCodeCamp portfolio task.',
        sourceCode: 'https://github.com/mito01100010/freeCodeCamp-portfolio-page',
        liveURL: 'https://mito01100010.github.io/freeCodeCamp-portfolio-page/',
    },
    {
        id: 3,
        title: 'Random Quote',
        img: './random-quote.JPG',
        desc: 'React quote generator that allows users to discover and share random quotes through a Twitter integration.',
        sourceCode: 'https://codepen.io/mito01100010/pen/BaYVmzx',
        liveURL: 'https://codepen.io/mito01100010/full/BaYVmzx',
    },
];

const Single = ({ item }) => {
    return (
        <section className='project'>
            <div className='shell'>
                <div className='project-inner' >
                    <div className='project-image'>
                        <img src={item.img} alt='' />
                    </div>
                    <div className={`project-text ${item.id % 2 === 0 ? 'project-text-ordering' : ''}`}>
                        <h2>{item.title}</h2>
                        <p>{item.desc}</p>
                        <div className='actions'>
                            {item.sourceCode && <a href={item.sourceCode} target="_blank" className='btn'>Source code</a>}
                            {item.liveURL && <a href={item.liveURL} target="_blank" className='btn'>Live URL</a>}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

const Projects = () => {
    return (
        <div id='projects' className='projects'>
            <h1>Projects</h1>

            {projects.map(item => (
                <Single item={item} key={item.id} />
            ))}
        </div>
    )
}

export default Projects 