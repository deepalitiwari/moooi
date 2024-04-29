import React, { useEffect, useState } from "react";
import "./Header.css";
import { IoMdSearch } from "react-icons/io";
import { FiMic } from "react-icons/fi";
import { HiOutlineViewBoards } from "react-icons/hi";
import { MdOutlineShoppingBag } from "react-icons/md";
import Bag from "../Bag/Bag";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = ({ textColor, backgroundColor, leftHeader, moooi }) => {
  const [isBagOpen, setIsBagOpen] = useState(false);
  const [preScrollPosition, setProvScrollPos] = useState(window.scrollY);
  const [headerPosition, setHeaderPostion] = useState(null);
  // const [isBackdropVisible, setIsBackdropVisible] = useState(false);

  const cartItem = useSelector((state) => state.cart.items);

  useEffect(() => {
    function scollHandler() {
      const scroll = window.scrollY;
      setHeaderPostion(preScrollPosition > scroll);
      setProvScrollPos(scroll);
    }
    window.addEventListener("scroll", scollHandler);
    return () => window.removeEventListener("scroll", scollHandler);
  }, [preScrollPosition]);

  function toogleBag() {
    setIsBagOpen(!isBagOpen);
    console.log(isBagOpen);
    // setIsBackdropVisible(!isBackdropVisible);
  }

  return (
    <div>
      <header
        style={{ color: textColor, backgroundColor: backgroundColor }}
        className={`${headerPosition ? "header__fix" : "header__realative"}`}
      >
        <div className="leftHead" style={{ display: leftHeader }}>
          <div className="hoverOn">
            <FiMic />
          </div>
        </div>
        <div className="moooi" style={{ justifyContent: moooi }}>
          <Link to="/">
            <h3 style={{ color: textColor }}>moooi</h3>
          </Link>
        </div>
        <div className="rightHead">
          <div className="hoverOn">
            <IoMdSearch />
          </div>
          <div className="hoverOn">
            <HiOutlineViewBoards />
          </div>
          <div className="hoverOn shopingBagdiv">
            <MdOutlineShoppingBag onClick={toogleBag} />
            {/* {quantity > 0 && <span className="bagQuantity">{quantity}</span>} */}
            <span className="shopingQnty">{cartItem.length}</span>
          </div>
        </div>
      </header>
      {isBagOpen && <Bag toogleBag={toogleBag} />}
    </div>
  );
};

export default Header;
