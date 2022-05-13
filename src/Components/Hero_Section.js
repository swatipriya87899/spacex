import React from 'react';
import spacex_bg from '../Images/spacex_bg.png';
import './Hero_Section.css';
import spacex_logo from '../Images/spacex_logo.png';

const Hero_Section = () => {
  return (
    <div className='hero_section'>
     <div className='hero_section_bg'>
         <img src={spacex_bg} alt="spacex_background" className='hero_section_image'></img>
    </div>   
    <div>
        <div className='spacex_logo'><img src={spacex_logo} alt="spacex_logo_image" className='spacex_logo_image'></img></div>
        <div className='hero_section_content'>
            <div className='hero_section_heading'>
                EXPLORE EXPEDITIONS <br></br> IN THE UNIVERSE
            </div>
            <div className='hero_section_subHeading'>
                We have gathered all the upcoming releases and the entire history of spaceX so that you can discover everything about the universe that we know so little
            </div>
        </div>
    </div>
    </div>
  )
}

export default Hero_Section