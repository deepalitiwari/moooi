import React from "react";
import "./ProductStories.css";
import { Link } from "react-router-dom";

const ProductStories = () => {
  return (
    <div className="MenuContiner">
      <div className="ProductStories">
        <div className="heading">
          <h1>Products Stories Gift Guide</h1>
        </div>
        <div className="Stories_content">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About us</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductStories;
