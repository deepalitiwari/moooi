import React, { useState } from "react";
import "./Bag.css";
import { IoMdSearch, IoMdClose } from "react-icons/io";
// import { HiOutlineViewBoards } from "react-icons/hi";
// import { MdOutlineShoppingBag } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Bag = ({ toogleBag, quantity }) => {
  // const [isbg, setIsbg] = useState(false);
  // function toogleBg() {
  //   setIsbg(!isbg);
  //   console.log(isbg);
  // }
  const cartItem = useSelector((state) => state.cart.items);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  console.log("CART", totalPrice);

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
        <div className="bagProducts">
          {cartItem.map(({ src, price, available, title, quantity }, index) => (
            <div className="product_Details" key={index}>
              <div className="image">
                <img src={src} />
              </div>
              <div className="data">
                {quantity} <RxCross2 className="mulitplyIcon" /> {title}
              </div>
              <div className="price">{price}USD </div>
            </div>
          ))}
        </div>
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
