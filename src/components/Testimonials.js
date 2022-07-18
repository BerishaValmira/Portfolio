import React from 'react'
import './styles/Testimonials.css'
import t1 from '../assets/pic5.jpg'


const Testimonials = () => {
    return (
        <section className='testi'>
            <h1>About Me</h1>
            <div className="cart-container">
                <div className="cart">
                    <img src={t1} alt="" />
                    <h5>I am a talented, ambitious and hardworking individual, with broad skills and experience in digital and printed marketing, social media and leading projects.
Furthermore, I am adept at handling multiple tasks on a daily basis competently and at working well under pressure.
A key strength is communication; building strong relationships with people in order to deliver the best results.
</h5>
                </div>

               

            </div>
        </section>
    )
}

export default Testimonials