import React, { useEffect, useState } from "react";
import "./Item.css";
import { SlArrowLeftCircle } from "react-icons/sl";
import { MdOutlineManageSearch } from "react-icons/md";
import { Link } from "react-router-dom";

function Item({ dataHead, data, bottom, cardItem }) {
  const [dataItem, setDataItem] = useState(cardItem);
  const [filter, setFilter] = useState(dataHead.Btn[0]);
  useEffect(() => {
    if (filter !== dataHead.Btn[0]) {
      const localData = cardItem.filter((element) => {
        return element.category === filter;
      });
      setDataItem(localData);
    } else {
      setDataItem(cardItem);
    }
  }, [filter, cardItem, dataHead.Btn]);
  const filterHandler = (val) => {
    console.log(val);

    setFilter(val);
  };
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
              return (
                <button
                  onClick={(e) => filterHandler(e.target.value)}
                  key={index}
                  value={item}
                >
                  {item}
                </button>
              );
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
        {dataItem.map((item, index) => (
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
          {bottom.bottomBtn.map((item, index) => {
            return (
              <button
                value={item}
                key={index}
                onClick={(e) => filterHandler(e.target.value)}
              >
                {item}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Item;
