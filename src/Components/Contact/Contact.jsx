import React from "react";
import "./Contact.css";
import { IoLocationSharp, IoCall } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { IoIosChatboxes } from "react-icons/io";
const Contact = () => {
  const ContactAddress = [
    {
      src: "https://www.moooi.com/_next/image?url=https%3A%2F%2Fa.storyblok.com%2Ff%2F246251%2F1754x1476%2F4486f2a3ec%2Fmoooi-utrechtsestraat-facade.png&w=1920&q=80",
      alt: "Amsterdam",
      title: "Moooi Store Amsterdam",
    },
    {
      src: "https://www.moooi.com/_next/image?url=https%3A%2F%2Fa.storyblok.com%2Ff%2F246251%2F1080x1350%2Fed2a86b32d%2Fgolden-chair-container.webp&w=1080&q=80",
      alt: "New York",
      title: "Moooi Store New York",
    },
    {
      src: "https://www.moooi.com/_next/image?url=https%3A%2F%2Fa.storyblok.com%2Ff%2F246251%2F1408x1760%2F2021bbea6f%2Fliberty_table_plant_chandelier.webp&w=1920&q=80",
      alt: "Tokyo",
      title: "Moooi Store Tokyo",
    },
  ];

  const ContactInfo = [
    {
      heading: "Head Office",
      address: "Minervum 7003 4817 ZL Breda, NL",
      mobile: "+31762060200",
      mail: "info@moooi.com",
    },
    {
      heading: "Moooi New York Brand Store",
      address: "36 East 31 st Street, NY 10016, New York USA",
      mobile: "+16463960455",
      mail: "ny@moooi.com",
    },
    {
      heading: "Moooi Store Amsterdam",
      address: "Utrechtsestraat 145-147 1017 VM Amsterdam, NL",
      mobile: "+31(0)20 528 7760",
      mail: "armsterdamstore@moooi.com",
    },
    {
      heading: "Store Tokyo",
      address:
        "3F Minamiaoyama Building 6-11-1 Minamioyama, Minotu-ku, Tokyo, JP",
      mobile: "+81 (0)3 3400 1040",
      mail: "info@toyo.toyokitchen.co.jp",
    },
    {
      heading: "Residential Dealers, Contract and A&D",
      address: "Minervum 7003 4817 ZL Breda, NL",
      mobile: "+31(0) 70 208 30 34",
      mail: "minervum@moooi.com",
    },
    {
      heading: "Interior Stylist and End-Consumer",
      address: "Utrechtsestraat 145-147 1017 VM Amsterdam, NL",
      mobile: "+31 (0)20-2141083",
      mail: "SalesSupport@moooi.com",
    },
  ];
  return (
    <div className="Contact">
      <div className="top">
        <h1>Contact</h1>
        <p className="para">
          Do you want to know more regarding Moooi or our products? We’d be
          happy to hear from you!
        </p>
        <div className="contactButton">
          <button>
            <MdOutlineEmail className="contactIcons" />
            <span> Send us an email</span>
          </button>
          <button>
            <IoIosChatboxes className="contactIcons" />
            <span>Chat with us</span>
          </button>
        </div>
      </div>
      <div className="stores">
        <h1>Moooi Stores & Brand Store</h1>
        <div className="contactCarts">
          {ContactAddress.map((item, index) => (
            <div className="contactCart" key={index}>
              <div className="ContactImages">
                <img src={item.src} alt={item.alt} />
              </div>
              <div className="contactTitle">{item.title}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="bottom">
        <h1>Moooi</h1>
        <p className="para">Worldwide</p>
        <div className="bottomContainer">
          <div className="InfoCarts">
            {ContactInfo.map((item, index) => (
              <div className="infoCart" key={index}>
                <div className="">
                  <h3>{item.heading}</h3>
                  <p>
                    <IoLocationSharp />
                    {item.address}
                  </p>
                  <p>
                    <IoCall />
                    {item.mobile}
                  </p>
                  <p>
                    <MdOutlineEmail />
                    {item.mail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
