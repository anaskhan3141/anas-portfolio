import React from 'react'
import "./AboutMe.css"


function AboutMe() {
    return (
        <div className='main-div'>
            <div className='container'>
                <div className='upper-div'>
                    <span className='heading'>About me</span>
                    <span className='heading-text'>Here you will find more information about me, what I do, and my current <br />skills mostly in terms of programming and technology</span>
                </div>
                <div className='lower-div'>
                    <div className='lower-left'>
                        <span id='get-to-know-me'>Get To Know Me</span>
                        <span id='get-to-know-me-para'>I'm a Frontend Web Developer building the Front-end of Websites and Web Applications that leads to the success of the overall product. Check out some of my work in the Projects section.<br />
                            I also like sharing content related to the stuff that I have learned over the years in Web Development so it can help other people of the Dev Community. Feel free to Connect or Follow me on my Linkedin where I post useful content related to Web Development and Programming.<br />
                            I'm open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to contact me.
                        </span>
                        <div id="contact-button-div">Contact Me</div>


                    </div>
                    <div className='lower-right'>
                    </div>
                </div>

            </div>

        </div>
    )


}


export default AboutMe