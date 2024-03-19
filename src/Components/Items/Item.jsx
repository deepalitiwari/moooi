import React from "react";
import "./Item.css";
import { SlArrowLeftCircle } from "react-icons/sl";
import { MdOutlineManageSearch } from "react-icons/md";
import { Link } from "react-router-dom";

function Item({ dataHead, data, bottom }) {
  //   console.log("DATA", dataHead);
  return (
    <div className="items">
      <div className="main">
        <h1 className="heading">{dataHead.name}</h1>
        <p className="para">
          Our collection contains work from emerging talent and internationally
          recognized designers. Together, we create A Life Extraordinary.
        </p>
        <div className="buttons">
          <div className="item-btn">
            <SlArrowLeftCircle className="icon" />

            {dataHead.Btn.map((item, index) => {
              return <button key={index}>{item}</button>;
            })}
          </div>
          <div className="filter-btn">
            <button>
              <MdOutlineManageSearch />
              Filter
            </button>
          </div>
        </div>
      </div>
      <div className="item-carts">
        {data.map((item, index) => (
          <Link to={`/products/${item.type}/${index}`}>
            <div className="cart" key={index}>
              <div className="cartImg">
                <img
                  key={item.id}
                  src={item.src}
                  alt={item.alt}
                  title={item.title}
                />
              </div>
              <div className="cartTitle">{item.title}</div>
              <div className="cartPrice">{item.price}</div>
              <div className="cartavailable">{item.available}</div>
            </div>
          </Link>
        ))}
      </div>
      <div className="item-bottom">
        <h1 className="heading">our suggestions</h1>
        <p className="para">
          Turn more dreams into reality. <br /> {bottom.p}
        </p>
        <div className="btn">
          {bottom.bottomBtn.map((item) => {
            return <button>{item}</button>;
          })}
        </div>
      </div>
    </div>
  );
}

export default Item;
