import React from "react";
import "./Hero.css";
import FacebookIcon from "../../assests/Facebook.svg";
import TwitterIcon from "../../assests/Twitter.svg";
import InstagramIcon from "../../assests/Instagram.svg";
import GithubIcon from "../../assests/Group.svg";
import LinkedInIcon from "../../assests/LinkedIn.svg";

function Hero() {
  return (
    <div id="hero-main-div">
      <div id="social-icons-main-div">
        <img src={FacebookIcon} alt="facebook" />
        <img src={TwitterIcon} alt="twitter" />
        <img src={InstagramIcon} alt="instagram" />
        <img src={GithubIcon} alt="github" style={{ marginLeft: "8px" }} />
        <img src={LinkedInIcon} alt="linkedIn" />
      </div>
      <div id="hero-text-plus-button-div">
        <div id="hero-text-div">
          <span id="hero-upper-text">HEY, I'M ANAS KHAN</span>
          <span id="hero-lower-text">
            A Frontend focused Web Developer building the Frontend of Websites
            and Web Applications that leads to the success of the overall
            product
          </span>
        </div>
        <div id="projects-button-div">Projects</div>
      </div>
    </div>
  );
}

export default Hero;
