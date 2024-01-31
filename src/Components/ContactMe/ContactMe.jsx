import React from "react";
import './ContactMe.css'
import SmallRectangle from '../../assests/SmallRectangle..svg'


function ContactMe() {

    return (
        <div id="contact-me-section" >
            <div id="container">
                <h2>Contact Me</h2>
                <img src={SmallRectangle} alt="" />

                <p id="heading-text">Feel free to Contact me by submitting the form below and I will get back to you as soon as possible.</p>
                <form action="#">
                    <input type="text" name="Name" placeholder="Name" />
                    <input type="text" name="Name" placeholder="Email" />
                    <textarea name="message" id="message" cols="30" rows="10" placeholder="Message"></textarea>
                </form>
                <div id="contact-me-button">Contact Me</div>
            </div>

        </div>
    )

}

export default ContactMe;