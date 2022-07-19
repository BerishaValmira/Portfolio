import React from 'react'
import './styles/Testimonials.css'
import t1 from '../assets/picture7.jpg'
// import {facebook,youtube} from 
import t2 from '../assets/picture8.png'



const Testimonials = () => {
    return (
        <section className='testi'>
            {/* <h1>About Me</h1> */}
            <div className="cart-container">
                <div className="cart">
                    <img src={t1} alt="" />
                    <h5>I am a talented, ambitious and hardworking individual, with broad skills and experience in digital and printed marketing, social media and leading projects.
                        Furthermore, I am adept at handling multiple tasks on a daily basis competently and at working well under pressure.
                        A key strength is communication; building strong relationships with people in order to deliver the best results.
                    </h5>
                </div>

            </div>
            <div className='social'>
                <h1>You can find me in these social media</h1>
                <a href='https://www.instagram.com/valmiraberisha2/'> Instagram </a>
                <a href='https://www.facebook.com/valmire.berisha.5//'> Facebook </a>
                <a href='https://www.linkedin.com/in/valmira-berisha-55a687217/'> linkedin </a>
            </div>

        </section>
    )
}

export default Testimonials