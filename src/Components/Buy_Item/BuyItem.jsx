import React, { useEffect, useState } from "react";
import "./BuyItem.css";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { useDispatch } from "react-redux";
import { addToCart } from "../../features/cartSlice/cartSlice";
const BuyItem = ({
  src,
  title,
  price,
  available,
  isExpanded,
  toggleCardHeight,
  isBagOpen,
}) => {
  const [newValue, setNewValue] = useState(false);

  //useDispatch() hook is used to add/remove the element from cart
  const dispatch = useDispatch();
  const addHandler = (item) => {
    dispatch(addToCart(item));
  };

  console.log("isExpanded value", isBagOpen);

  const setvalue = setInterval(() => {
    const newvalue = sessionStorage.getItem("value");

    if (newvalue == "false") {
      setNewValue(true);
    } else {
      setNewValue(false);
    }

    // console.log("newvalue", newvalue);
  }, 500);

  // console.log("values is", newValue);

  return (
    <div className={newValue == true ? "buyItems" : "buyItems-none"}>
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
            <button
              onClick={() =>
                addHandler({
                  src,
                  title,
                  price,
                  available,
                  quantity: 1,
                  subtotal: price,
                })
              }
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
      <div className="dimension">
        <div className="dimensionImg">
          <img src={src} alt="product Image" />
        </div>
      </div>
    </div>
  );
};

export default BuyItem;
