import React, { useState } from "react";
import "./Header.css";
import { IoMdSearch } from "react-icons/io";
import { FiMic } from "react-icons/fi";
import { HiOutlineViewBoards } from "react-icons/hi";
import { MdOutlineShoppingBag } from "react-icons/md";
import Bag from "../Bag/Bag";
const Header = ({ textColor, backgroundColor, leftHeader, moooi }) => {
  const [isBagOpen, setIsBagOpen] = useState(false);
  function toogleBag() {
    setIsBagOpen(!isBagOpen);
    console.log(isBagOpen);
  }
  return (
    <div>
      <header style={{ color: textColor, backgroundColor: backgroundColor }}>
        <div className="leftHead" style={{ display: leftHeader }}>
          <FiMic />
        </div>
        <div className="moooi" style={{ justifyContent: moooi }}>
          <h3>moooi</h3>
        </div>
        <div className="rightHead">
          <IoMdSearch />
          <HiOutlineViewBoards />
          <MdOutlineShoppingBag onClick={toogleBag} />
        </div>
      </header>
      <Bag />
    </div>
  );
};

export default Header;
