import React from "react";
import spacex_bg from "../Images/spacex_bg.png";
import "./Hero_Section.css";
import { Link } from "react-scroll/modules";

const Hero_Section = () => {
  return (
    <div className="hero_section">

      {/* Hero-Section Image */}
      <div className="hero_section_bg">
        <img
          src={spacex_bg}
          alt="spacex_background"
          className="hero_section_image"
        ></img>
      </div>

      {/* Hero-Section Text */}
        <div className="hero_section_content">
          <div className="hero_section_heading">
            EXPLORE EXPEDITIONS <br></br> IN THE UNIVERSE
          </div>
          <div className="hero_section_subHeading">
            We have gathered all the upcoming releases and the entire history of
            spaceX so that you can discover everything about the universe that
            we know so little
          </div>
          <Link to="card_group" spy={true} smooth={true}>
            <div className="launchpad_button">LAUNCHPAD</div>
          </Link>
        </div>
    </div>
  );
};

export default Hero_Section;
