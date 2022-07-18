import React from 'react';
import './styles/Second.css'
import project from '../assets/project1.jpg'
const Second = () => {
    return (
        <section className='section-2'>
            <h1 className='about-me'>Some of my skills</h1>

            <div className="container-2">

                <div className="image-cont">
                    <img src={project} alt="" />
                </div>
                <div className='text-2'>
                    <p>Front-End Developer</p>
                    <p>React js,html,css </p>
                    <p>UI & UX Designer</p>
                    <p>Java,.net,php</p>
                    <p>Good Management ,Communication</p>
                </div>
            </div>
        </section>

    )
}

export default Second