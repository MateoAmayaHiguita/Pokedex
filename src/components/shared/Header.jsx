import React from "react";
import "./styles/Header.css";

const Header = () => {
  return (
    <div className="header">
      <img className="header_img" src="/images/pokedex-pokedex.png" alt="" />
      <div className="header_black">
        <div className="header_circle">
          <div className="header_circle-int"></div>
        </div>
      </div>
    </div>
  );
};

export default Header;
