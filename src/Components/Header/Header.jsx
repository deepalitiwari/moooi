// import React, { useState } from "react";
import {} from "react-bootstrap";
import "./Header.css";
import { FaSearch } from "react-icons/fa";
import { FiMic } from "react-icons/fi";
import { HiOutlineViewBoards } from "react-icons/hi";
import { MdOutlineShoppingBag } from "react-icons/md";

const Header = () => {
  return (
    <div>
      <header className="header">
        <div className="list-items">
          <div className="mic">
            <li>
              <a href="#">
                <FiMic />
              </a>
            </li>
          </div>
          <div className="moooi">
            <a href="#">
              <li>moooi</li>
            </a>
          </div>
          <div className="icons">
            <a href="#" title="Search">
              <li>
                <FaSearch />
              </li>
            </a>
            <a href="#">
              <li>
                <HiOutlineViewBoards />
              </li>
            </a>
            <a href="#">
              <li>
                <MdOutlineShoppingBag />
              </li>
            </a>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
