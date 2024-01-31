import React from "react";
import './AboutMe.css'
import UpperBorder from '../../assests/Border-top.svg'
import LowerBorder from '../../assests/Border-bottom.svg'
import SmallRectangle from '../../assests/SmallRectangle..svg'
import MiddleLine from "../../assests/middle line.svg"
import TinyRectangle from "../../assests/tinyRectangle.svg"


function AboutMe() {

    return (
        <div id="about-us-section">
            <div id="about-us-inner-div">
                <img src={UpperBorder} alt="" id='upper-border' />
                <img src={LowerBorder} alt="" id="lower-border" />
                <div id="upper-div">
                    <h2>About Me</h2>
                    <img src={SmallRectangle} alt="" />
                    <p>Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology</p>
                </div>

                <div id="lower-div">
                    <div id="lower-left">
                        <h3>Get To Know Me</h3>
                        <p>I'm a Frontend Web Developer building the Front-end of Websites and Web Applications that leads to the success of the overall product. Check out some of my work in the Projects section.
                            I also like sharing content related to the stuff that I have learned over the years in Web Development so it can help other people of the Dev Community. Feel free to Connect or Follow me on my Linkedin where I post useful content related to Web Development and Programming
                            I'm open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to contact me.
                        </p>
                        <div id="contact-me-button">Contact me</div>
                    </div>
                    <img src={MiddleLine} alt="" />
                    <div id="lower-right">
                        <h3>My Skills</h3>
                        <div id="list-container">
                            <div id="left">
                                <p>CSS</p>
                                <p>CSS</p>
                                <p>CSS</p>
                                <p>CSS</p>
                                <p>CSS</p>
                                <p>CSS</p>
                            </div>
                            <div id="right">
                                <p>CSS</p>
                                <p>CSS</p>
                                <p>CSS</p>
                                <p>CSS</p>
                                <p>CSS</p>
                                <p>CSS</p>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

            {/* <div id="about-us-inner-div">
                <img src={UpperBorder} alt="" id="upper-border" />
                <img src={LowerBorder} alt="" id="lower-border" />
                <div id="upper-div">

                </div>

                <div id="lower-div">

                </div>
            </div> */}
        </div>
    )
}

export default AboutMe;