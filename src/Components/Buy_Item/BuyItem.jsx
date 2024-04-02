import React from "react";
import "./BuyItem.css";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { useDispatch } from "react-redux";
import { addToCart } from "../../features/cartSlice/cartSlice";
const BuyItem = ({ src, title, price, available }) => {
  // console.log(title);
  //useDispatch() hook is used to add/remove the element from cart
  const dispatch = useDispatch();
  const addHandler = (item) => {
    dispatch(addToCart(item));
  };

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
              Buy
            </button>
          </div>
        </div>
      </div>
      <div className="dimension">
        <div className="prodContent">
          <div className="head">
            {/* <h3>Dimension</h3> */}
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
