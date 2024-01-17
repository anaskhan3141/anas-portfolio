import React from "react";
import "./Header.css";

function Header() {
  return (
    <div id="header-main">
      <div id="header-options-main-div">
        <span id="anas-name">Anas Khan</span>
        <div id="header-options-sub-div">
          <div id="header-single-option-div">Home</div>
          <div id="header-single-option-div">About</div>
          <div id="header-single-option-div">Projects</div>
        </div>
      </div>
      <div id="header-button-div">Contact Me</div>
    </div>
  );
}

export default Header;
