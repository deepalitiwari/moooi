import React, { useState } from "react";
import "./ProductStories.css";
import { Link } from "react-router-dom";
import { IoMdSearch } from "react-icons/io";
import { MdOutlineMicNone } from "react-icons/md";

const ProductStories = ({
  handleMenu,
  handleLogin,
  handleSignup,
  handleContactClick,
}) => {
  const [text, setText] = useState("");
  const handleText = (e) => {
    setText(e.target.value);
    console.log(text);
  };
  return (
    <div id="productStories">
      <div className="MenuContiner">
        <div className="top">
          <div className="left">
            <IoMdSearch className="prodIcons" />
          </div>
          <div className="center">
            <input
              type="text"
              onChange={handleText}
              placeholder="Serch for products, stories, ..."
            />
          </div>
          <div className="right">
            <MdOutlineMicNone className="prodIcons" />
          </div>
        </div>

        <div className="ProductStories">
          <div className="heading">
            <h1>Products Stories Gift Guide</h1>
          </div>
          <div className="Stories_content">
            <ul>
              <li>
                <Link to="/" onClick={handleContactClick}>
                  {" "}
                  Home
                </Link>
              </li>
              <li onClick={handleLogin}>Login</li>
              <li onClick={handleSignup}>Sign Up</li>
              <li>
                <Link to="contact" onClick={handleContactClick}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductStories;
