import React from "react";
import "../styles/header.css";
const Header = props => {
  return (
    <>
      <header>
        <div class="background-wrapper">
          <img id="bgc1" src="img/bgc1.png" alt="" />
          <img id="bgc2" src="img/bgc2.png" alt="" />
          <img id="bgc3" src="img/bgc3.png" alt="" />
          <img id="bgc4" src="img/bgc4.png" alt="" />
          <img id="bgc5" src="img/bgc5.png" alt="" />
        </div>
        <h1 id="name">Igor Fenikowski</h1>
        <h2 id="specialty">Full-stack web developer</h2>
      </header>
    </>
  );
};

export default Header;
