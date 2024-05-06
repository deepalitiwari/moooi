import React, { useEffect, useState } from "react";
import "./Header.css";
import { GoSearch } from "react-icons/go";
import { FiMic } from "react-icons/fi";
import { RxDashboard } from "react-icons/rx";
import { FiShoppingBag } from "react-icons/fi";
import Bag from "../Bag/Bag";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = ({ textColor, backgroundColor, leftHeader, moooi }) => {
  const [isBagOpen, setIsBagOpen] = useState(false);
  const [preScrollPosition, setProvScrollPos] = useState(window.scrollY);
  const [headerPosition, setHeaderPostion] = useState(null);
  const [popup, setPopup] = useState(false);

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
    setPopup(!popup);
    console.log(isBagOpen);
    // setIsBackdropVisible(!isBackdropVisible);
  }

  if (popup == false) {
    sessionStorage.setItem("value", "false");
  } else {
    sessionStorage.setItem("value", "true");
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
            <GoSearch />
          </div>
          <div className="hoverOn">
            <RxDashboard />
          </div>
          <div className="hoverOn shopingBagdiv">
            <FiShoppingBag onClick={toogleBag} />
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
