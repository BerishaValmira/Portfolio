import React from "react";
import './styles/Repository.css'
import IMG1 from '../assets/photo4.jpg';
import IMG2 from '../assets/photo4.jpg';

const Repository = () => {
    return (
        <section id="portfolio">
            {/* <h5>My React Work</h5>
            <h2>Portfolio</h2> */}


            <div className=" portfolio-container">
            <article className="portfolio_item">
                <div className="portfolio_item-image">
                <img src={IMG1} alt="" />
                <br/>
                <br/>
                <h3>This is a portfolio with React </h3>
                <br/> 
                <button className="button"><a href="https://github.com/BerishaValmira/Portfolio" className="btn" target='_blank'>Github</a></button> 
                </div>
              
                {/* <a href="https://dribbble.com/Alien_pixels" className="btn btn-primary" target="_blank">Live Demo</a> */}
            </article>



            <article className="portfolio_item">
                <div className="portfolio_item-image">
                <img src={IMG2} alt="" />
                <br/>
                <br/>
                <h3>This is a Website with PHP,JS </h3>
                <br/> 
               <button className="button"><a href="https://github.com/BerishaValmira/ProjektiWebb" className="btn" target='_blank'>Github</a></button> 
                </div>
          
                {/* <a href="https://dribbble.com/Alien_pixels" className="btn btn-primary" target="_blank">Live Demo</a> */}
            </article>


            <article className="portfolio_item">
                <div className="portfolio_item-image">
                <img src={IMG2} alt="" />
                <br/>
                <br/>
                <h3>This is Website with React,.net </h3>
                <br/>  
                <button className="button"><a href="https://github.com/BerishaValmira/Portfolio" className="btn" target='_blank'>Github</a></button> 
                </div>
               
                {/* <a href="https://dribbble.com/Alien_pixels" className="btn btn-primary" target="_blank">Live Demo</a> */}
            </article>



            
            </div>
        </section>
    )
}
export default Repository