import React from "react";
import "./ViewBag.css";
import { Link } from "react-router-dom";
import { IoMdArrowDropright } from "react-icons/io";
import { MdOutlineLocalShipping } from "react-icons/md";
import { TbTruckReturn } from "react-icons/tb";
import { GiCircleCage } from "react-icons/gi";
const ViewBag = () => {
  // Generate array for displying numbers in dropdowm
  const options = [];
  for (let i = 1; i <= 500; i++) {
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
      <div className="orderDetails">
        <div className="shoppingBag">
          <h1>Shopping bag</h1>
          <div className="shoppingContent">
            <div className="left">
              <img
                src="https://www.moooi.com/_next/image?url=https%3A%2F%2Fcdn.moooi.com%2Ftmp%2Fimage-thumbnails%2FCollection%2FBedding%2FBed%20Scarf%2FMenagerie%2Fimage-thumb__51143__header_fullscreen_2x_jpg%2F6934-MO-Menagerie-of-Extinct-Animals-Raven-XL-Scarf.webp&w=1080&q=80"
                alt="Product Image"
              />
            </div>
            <div className="right">
              <div className="title">
                Menagerie of Extinct Animals Bed Scarf XL
              </div>
              <div className="prodDetails">
                <div className="details">
                  <div className="counting">
                    <select className="dropdown">
                      {options.map((item) => (
                        <option key={item} value={item}>
                          {item}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <button className="delete">Delete</button>
                  </div>
                </div>
                <div className="ProductPrice">
                  <p>299.00 USD</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="orderSummary">
          <div className="heading">
            <h1>Order Summary</h1>
          </div>
          <div className="sub_Total">
            <div className="subTotalTop">
              <div className="orderHead">SubTotal</div>
              <div className="subTotalPrice">299.00 USD</div>
            </div>
            <div className="subTotalBottom">
              <div className="shipping">Shipping</div>
              <div className="shippingDetails">calculated at next step</div>
            </div>
          </div>
          <div className="overall">
            <div className="totalPrice">
              <div className="head">Total</div>
              <div className="price">299.00 USD</div>
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
    </div>
  );
};

export default ViewBag;
