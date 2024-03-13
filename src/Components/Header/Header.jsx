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
      <header>
        <div className="leftHead">
          <FiMic />
        </div>
        <div className="moooi">
          <h3>moooi</h3>
        </div>
        <div className="rightHead">
          <FaSearch />
          <HiOutlineViewBoards />
          <MdOutlineShoppingBag />
        </div>
      </header>
    </div>
  );
};

export default Header;
