import React from "react";
import "./Bag.css";
import { IoMdSearch } from "react-icons/io";
import { HiOutlineViewBoards } from "react-icons/hi";
import { MdOutlineShoppingBag } from "react-icons/md";
const Bag = () => {
  return (
    <div className="bag">
      <div className="icons">
        <IoMdSearch />
        <HiOutlineViewBoards />
        <MdOutlineShoppingBag />
      </div>
      <div className="bagContent">
        <div className="head">Bag</div>
        <div className="productDetails">
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
            <button>View Bag</button>
            <button>Checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bag;
