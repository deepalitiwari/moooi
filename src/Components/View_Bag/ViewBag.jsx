import React from "react";
import "./ViewBag.css";
import { Link } from "react-router-dom";
import { IoMdArrowDropright } from "react-icons/io";
import { MdOutlineLocalShipping } from "react-icons/md";
import { TbTruckReturn } from "react-icons/tb";
import { GiCircleCage } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import {
  removeFromCart,
  updateQuantityByTitle,
} from "../../features/cartSlice/cartSlice";
import Collection from "../Browse_Our_Collection/Collection";
// import Collection from "./Components/Browse_Our_Collection/Collection";
const ViewBag = () => {
  const dispatch = useDispatch();
  const cartItem = useSelector((state) => state.cart.items);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  console.log(cartItem);
  //Check the cart is empty
  const isShoppingBagEmpty = cartItem.length === 0;
  const [subtotals, setSubtotals] = useState({});

  useEffect(() => {
    // Calculate subtotals for each item
    const newSubtotals = {};
    cartItem.forEach((item) => {
      const subtotal = item.quantity * parseFloat(item.price.slice(1));
      newSubtotals[item.title] = subtotal;
    });
    setSubtotals(newSubtotals);
  }, [cartItem]);

  const handleQuantityChange = (event, title) => {
    const newQuantity = parseInt(event.target.value); // Convert string to number
    const productTitle = title; // Replace with the actual product title or get it from your component's state
    dispatch(updateQuantityByTitle({ title: productTitle, newQuantity }));
  };
  const deleteHandler = (item) => {
    dispatch(removeFromCart(item));
  };
  // Generate array for displying numbers in dropdowm
  const options = [];
  for (let i = 1; i <= 10; i++) {
    options.push(i);
  }
  return (
    <div className="viewBag">
      <div className="top">
        <div>
          <Link to="/">
            <li>Home</li>
          </Link>
        </div>
        <div>
          <li>
            <IoMdArrowDropright />
          </li>
        </div>
        <div>
          <li>Shopping Bag</li>
        </div>
      </div>

      {isShoppingBagEmpty ? (
        <div className="empty">
          <h1>Your Shopping Bag is empty!</h1> <Collection />
        </div>
      ) : (
        <div className="orderDetails">
          <div className="shoppingBag">
            <h1>Shopping bag</h1>
            {cartItem.map(
              ({ src, price, available, title, quantity, subtotal }, index) => (
                <div className="shoppingContent">
                  <div className="left">
                    <img src={src} alt="Product Image" />
                  </div>
                  <div className="right">
                    <div className="title">
                      {quantity}
                      <RxCross2 className="multiplyIcon" /> {title}
                    </div>
                    <div className="prodDetails">
                      <div className="details">
                        <div className="counting">
                          <select
                            className="dropdown"
                            onChange={(e) => handleQuantityChange(e, title)}
                            value={quantity}
                          >
                            {options.map((item) => (
                              <option key={item} value={item}>
                                {item}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div>
                          <button
                            className="delete"
                            onClick={() =>
                              deleteHandler({
                                src,
                                price,
                                available,
                                title,
                              })
                            }
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                      <div className="ProductPrice">
                        {/* <p> ${quantity * price.slice(1)}</p> */}
                        {/* <p>${subtotals[title]}</p> */}
                        <p>${subtotal}</p>
                      </div>
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
          <div className="orderSummary">
            <div className="heading">
              <h1>Order Summary</h1>
            </div>
            <div className="sub_Total">
              <div className="subTotalTop">
                <div className="orderHead">SubTotal</div>
                <div className="subTotalPrice">
                  $
                  {Object.values(subtotals).reduce(
                    (acc, curr) => acc + curr,
                    0
                  )}
                </div>
              </div>
              <div className="subTotalBottom">
                <div className="shipping">Shipping</div>
                <div className="shippingDetails">calculated at next step</div>
              </div>
            </div>
            <div className="overall">
              <div className="totalPrice">
                <div className="head">Total</div>
                <div className="price">
                  $
                  {Object.values(subtotals).reduce(
                    (acc, curr) => acc + curr,
                    0
                  )}
                </div>
              </div>
              <div className="checkOut">
                <button>Go to Checkout</button>
              </div>
            </div>
            <div className="bottomIcons">
              <div className="myIcons">
                <MdOutlineLocalShipping className="shippingIcons" />
                <h1>Free Shipping</h1>
              </div>
              <div className="myIcons">
                <TbTruckReturn className="shippingIcons" />
                <h1>Easy Return Within 100 Days</h1>
              </div>
              <div className="myIcons">
                <GiCircleCage className="shippingIcons" />
                <h1>5 Years Warranty after Registraion</h1>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ViewBag;
