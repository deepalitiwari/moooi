import React from "react";
import "./Footer.css";
import {FaPinterest,FaInstagram,FaVimeo,FaLinkedin,FaFacebook,FaSpotify,FaCopyright} from "react-icons/fa";
import { MdArrowUpward } from "react-icons/md";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="footer" >
      <div className="footer-bottom">
        <div className="btn-Icon">
          <div className="btn">
            <button className="europe-btn">
              <select name="" id="">
                <option value="">United State</option>
                <option value="">Europe</option>
              </select>
            </button>
          </div>
          <div className="icon" onClick={scrollToTop}>
            <MdArrowUpward />
          </div>
        </div>
        <div className="bootom-content">
          <div>
            <li> <a href="#">Store Locator</a> </li>
            <li> <a href="#">Material Library</a> </li>
            <li> <a href="#">Shipping & Returns</a> </li>
            <li> <a href="#">FAQ</a> </li>
          </div>
          <div>
            <li> <a href="#">Newsletter</a> </li>
            <li> <a href="#">Press Area</a> </li>
            <li> <a href="#">Jobs</a> </li>
          </div>
        </div>
        <div className="bootom-area">
          <div className="bootom-icons">
            <ul>
              <li> <FaPinterest /> </li>
              <li> <FaInstagram /> </li>
              <li> <FaVimeo /> </li>
              <li> <FaLinkedin /> </li>
              <li> <FaFacebook /> </li>
              <li> <FaSpotify /> </li>
            </ul>
          </div>
          <div className="bottom-area-list">
            <ul>
              <li> <a href="">Disclaimer</a> </li>
              <li> <a href="">Cookie Policy</a> </li>
              <li> <a href="">General Conditions</a> </li>
              <li> <a href="">Privacy Statement</a> </li>
              <li> <a href=""> <FaCopyright /> 2024 Moooi </a> </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;