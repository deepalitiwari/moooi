import React from "react";
import "./BuyItem.css";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
const BuyItem = ({ src, title, price, available }) => {
  console.log(title);
  return (
    <div className="buyItems">
      <div className="buyCart">
        <div className="prodData">
          <div className="prodImg">
            <img src={src} alt="Product Image" />
          </div>
          <div className="prodTitle">
            <h1>{title}</h1>
            <p>{price}</p>
            <p>{available}</p>
          </div>
          <div className="prodButton">
            <button>Buy</button>
          </div>
        </div>
      </div>
      <div className="dimension">
        <div className="prodContent">
          <div className="head">
            <h3>Dimension</h3>
          </div>
          {/* <div className="icon">
            <IoIosArrowUp />
            <IoIosArrowDown />
          </div> */}
        </div>
        <div className="dimensionImg">
          <img src={src} alt="product Image" />
        </div>
      </div>
    </div>
  );
};

export default BuyItem;
