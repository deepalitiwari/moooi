import React, { useState } from "react";
import "./ProductStories.css";
import { Link } from "react-router-dom";


const ProductStories = ({handleMenu}) => {
  const handleClick = () => {
    handleMenu(); // Close the menu
    window.scrollTo(0, 0); // Scroll to the top of the page
  };
  return (
    <div className="MenuContiner">
      <div className="ProductStories">
        <div className="heading">
          <h1>Products Stories Gift Guide</h1>
        </div>
        <div className="Stories_content">
          <ul>
            <li>
              <Link to="/" onClick={handleClick}> Home</Link>
            </li>
            <li>
              <Link to="/about" onClick={handleClick}>About us</Link>
            </li>
            <li>
              <Link to="/login" onClick={handleClick}>Login</Link>
            </li>
            <li>
              <Link to="/signUp" onClick={handleClick}>Sign Up</Link>
            </li>
            <li>
              <Link to="contact" onClick={handleClick}>Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductStories;
