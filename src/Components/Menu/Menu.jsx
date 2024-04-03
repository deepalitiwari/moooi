import React from "react";
import "./Menu.css";

const Menu = ({ handleMenu }) => {
  return (
    <>
      <div className="menu" onClick={handleMenu}>
        <img
          src="https://www.moooi.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbutton.13ab0204.png&w=256&q=80"
          alt="menu"
        />
        <div className="overlay-text">Menu</div>
      </div>
    </>
  );
};

export default Menu;
