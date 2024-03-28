import React, { useState } from "react";
import "./Bag.css";
import { IoMdSearch, IoMdClose } from "react-icons/io";
import { HiOutlineViewBoards } from "react-icons/hi";
import { MdOutlineShoppingBag } from "react-icons/md";
import { Link } from "react-router-dom";

const Bag = ({ toogleBag }) => {
  // const [isbg, setIsbg] = useState(false);
  // function toogleBg() {
  //   setIsbg(!isbg);
  //   console.log(isbg);
  // }
  return (
    <div className="bag">
      {/* <div className="icons">
        <IoMdSearch />
        <HiOutlineViewBoards />
        <MdOutlineShoppingBag />
      </div> */}
      <div className="bagContent">
        <div className="head">
          <div className="heading">Bag</div>
          <div className="close">
            <IoMdClose onClick={toogleBag} />
          </div>
        </div>
        <div className="product_Details">
          <div className="image">
            <img
              src="https://www.moooi.com/_next/image?url=https%3A%2F%2Fcdn.moooi.com%2Ftmp%2Fimage-thumbnails%2FCollection%2FBedding%2FBed%20Scarf%2FMenagerie%2Fimage-thumb__51143__header_fullscreen_2x_jpg%2F6934-MO-Menagerie-of-Extinct-Animals-Raven-XL-Scarf.webp&w=1080&q=80"
              alt="product Image"
            />
          </div>
          <div className="data">Menagerie of Extinct Animals Bed Scarf XL</div>
          <div className="price">269.00 USD </div>
        </div>

        <div className="bottom">
          <div className="subTotal">
            <div className="total">SubTotal</div>
            <div className="TotalPrice">1375.00 USD</div>
          </div>
          <div className="buttons">
            <Link to="/viewBag">
              <button className="viewBag">View Bag</button>
            </Link>

            <button className="checkOut">Checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bag;
