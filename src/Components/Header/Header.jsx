import {React,useState, useEffect} from "react";
import HeaderMobile from './HeaderMobile'
import "./Header.css";

function Header() {

  const [screenWidth,setScreenWidth] = useState(window.innerWidth)

  const calculateWidth = ()=>{
    setScreenWidth(window.innerWidth)
  }
 
  useEffect(()=>{
    window.addEventListener('resize', calculateWidth)

    return ()=>{
      window.removeEventListener('resize',calculateWidth)
    }
  },[])

  return (
    screenWidth >499 ?
    <div id="header-main">
      <div id="header-options-main-div">
        <span id="anas-name">Anas Khan{screenWidth}</span>
        <div id="header-options-sub-div">
          <div id="header-single-option-div">Home</div>
          <div id="header-single-option-div">About</div>
          <div id="header-single-option-div">Projects</div>
        </div>
      </div>
      <div id="header-button-div">Contact Me</div>
    </div>
    : 
    <HeaderMobile/>
  );
}

export default Header;
