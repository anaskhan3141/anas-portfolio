import React from "react";
import "./Footer.css";
import FooterFb from "../../assests/FooterFb.svg";
import FooterTwitter from "../../assests/FooterTwitter.svg";
import FooterGit from "../../assests/FooterGit.svg";
import FooterInsta from "../../assests/FooterInsta.svg";
import FooterLinkedIn from "../../assests/FooterLinkedIn.svg";
import SendEmail from "../../assests/send.svg";

function Footer() {
  return (
    <div id="footer-main-div">
      <div id="footer-inner-div">
        <div id="footer-left-details-div">
          <div id="footer-description-div">
            <span id="footer-anas-name">Anas Khan</span>
            <span id="footer-description-para">
              Hi, I Anas Khan, lorem ipsum lorem ipsum lorem ipsum lorem ipsum
              lorem ipsum lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem
              ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem
              ipsum
            </span>
          </div>
          <div id="footer-social-icon-div">
            <img src={FooterFb} alt="facebook" />
            <img src={FooterTwitter} alt="twitter" />
            <img src={FooterGit} alt="github" id="footer-github-icon" />
            <img src={FooterInsta} alt="instagram" />
            <img src={FooterLinkedIn} alt="linkedIn" />
          </div>
        </div>
        <div id="footer-right-details-div">
          <div id="footer-nav-links-div">
            <span id="footer-nav-name">Sections</span>
            <div id="footer-nav-links">
              <span id="footer-single-nav-link">About Me</span>
              <span id="footer-single-nav-link">Projects</span>
              <span id="footer-single-nav-link">Contact Me</span>
            </div>
          </div>
          <div id="footer-email-button-div">
            <span id="stay-up-to-date-heading">Stay up to date</span>
            <div id="sent-email-button-div">
              <div id="send-email-btn">
                <span id="write-an-email-span">Write me an email</span>
                <img src={SendEmail} alt="send-email" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
