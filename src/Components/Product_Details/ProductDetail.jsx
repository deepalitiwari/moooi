import React, { useEffect, useState } from "react";
import "./ProductDetail.css";
import { MdOutlineLocalShipping } from "react-icons/md";
import { TbTruckReturn } from "react-icons/tb";
import { GiCircleCage } from "react-icons/gi";
import { useParams } from "react-router-dom";

import { beddingBath } from "../Items/data1";
import { furniture } from "../Items/data2";
import { lighting } from "../Items/data3";
import { homeAccessories } from "../Items/data4";
import { wallFloor } from "../Items/data5";
import { bodyBeauty } from "../Items/data6";
import BuyItem from "../Buy_Item/BuyItem";

const ProductDetail = ({ toggleCardHeight, isExpanded }) => {
  const { type, index } = useParams();
  const [prodData, setData] = useState({});

  let myData = [
    beddingBath,
    furniture,
    lighting,
    homeAccessories,
    wallFloor,
    bodyBeauty,
  ];

  useEffect(() => {
    console.log(prodData);
  }, [prodData]);

  useEffect(() => {
    myData.forEach(
      (item, i) => {
        for (var i of item) {
          if (i.type === type) {
            setData(item[index]);
            break;
          }
        }
      },
      [index]
    );
  });

  return (
    <div className="productDetails">
      <div className="productImg">
        <img src={prodData.src} alt="Product Image" />
      </div>
      <div className="productData">
        <BuyItem
          src={prodData.src}
          title={prodData.title}
          price={prodData.price}
          available={prodData.available}
          toggleCardHeight={toggleCardHeight}
          isExpanded={isExpanded}
        />
        <h1 className="head">{prodData.title}</h1>
        <h3>Moooi,2022</h3>
        <div className="ProdContent">
          <div className="leftContent">
            <div className="para">
              <p>
                Elevate your space with our exquisite product, {prodData.title}
                ,crafted to perfection. Whether it's for {prodData.type}, our
                product promises to captivate your senses and redefine your
                ambiance.
              </p>
              <a>Read more</a>
            </div>
          </div>
          <div className="rightContent">
            <ul>
              <li>
                <MdOutlineLocalShipping />
                <span>Free Shipping</span>
              </li>
              <li>
                <TbTruckReturn />
                <span>Easy Return Within 100 Days</span>
              </li>
              <li>
                <GiCircleCage />
                <span>5 years Warranty After Registraion</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="suggestion">
        <h1 className="heading">our suggestions</h1>
        <p className="para">
          At Moooi, we prioritize your satisfaction and convenience. Explore our
          extensive range of customer-centric policies crafted to elevate your
          shopping experience:
        </p>
      </div>
      <div className="policies">
        <div className="policy">
          <MdOutlineLocalShipping className="productIcons" />
          <div className="innerPolicy">
            <h1>Free Shipping</h1>
            <p>Free Shipping on all orders over $100</p>
          </div>
        </div>
        <div className="policy">
          <TbTruckReturn className="productIcons" />
          <div className="innerPolicy">
            <h1>Easy Return Within 100 Days</h1>
            <p>
              If you're not in love with our product you may return within 100
              days of receipt without given reasons.
            </p>
            <a>Return Policy</a>
          </div>
        </div>
        <div className="policy">
          <GiCircleCage className="productIcons" />
          <h1>5 Years Warranty after Registraion</h1>
          <p>
            All our lighting and furniture products come with The Button. Tap it
            to check authenticity and register your product to get extended
            warranty.
          </p>
          <a>The Button</a>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
