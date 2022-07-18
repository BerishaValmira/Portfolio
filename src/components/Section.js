import React from 'react';
import './styles/Section.css'
import pic2 from '../assets/pi6.png'


const Section = () => {
    return (
        <section className='main-section'>

            <div className='conteiner'>


                <div className="texts">
                    <h1>Hello my name is  </h1>
                    <h1 className='h1-big'>Valmira Berisha</h1>
                    <p>I'm a software engineer and a problem solver</p>
                    <button className='text-button'>My Work</button>
                </div>

               
                <div className='image'>
                    <img src={pic2} alt="" />

                </div>
            </div>
        </section>
    )
}   
export default Section;