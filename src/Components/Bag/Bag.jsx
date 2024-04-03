import React, { useState } from "react";
import "./Bag.css";
import { IoMdClose } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Bag = ({ toogleBag}) => {
  const cartItem = useSelector((state) => state.cart.items);
  const totalPrice = useSelector((state) => state.cart.totalPrice);

  const isEmptyCart = cartItem.length === 0;
  return (
    <div className="bag">
      <div className="bagContent">
        <div className="head">
          <div className="heading">Bag</div>
          <div className="close">
            <IoMdClose onClick={toogleBag} />
          </div>
        </div>
        {isEmptyCart ? (
          <div className="emptyCart">
            <h1>Your Shopping Bag is Empty</h1>
            <p>Please add some items here...</p>
          </div>
        ) : (
          <div className="bagProducts">
            {cartItem.map(({ src, price, available, title, quantity, subtotal }, index) => (
                <div className="product_Details" key={index}>
                  <div className="image">
                    <img src={src} />
                  </div>
                  <div className="data">
                    {quantity} <RxCross2 className="mulitplyIcon" /> {title}
                  </div>
                  <div className="price">{subtotal}USD </div>
                </div>
              )
            )}
          </div>
        )}
        <div className="bottom">
          <div className="subTotal">
            <div className="total">SubTotal</div>
            <div className="TotalPrice">${totalPrice} USD</div>
          </div>
          <div className="buttons">
            <Link to="/viewBag">
              <button className="viewBag" onClick={toogleBag}>
                View Bag
              </button>
            </Link>

            <Link to="/viewBag">
              <button className="checkOut" onClick={toogleBag}>
                Checkout
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bag;
