import React from "react";
import "./DesignDreams.css";
import { Link } from "react-router-dom";
function DesignDream({
  h3,
  src,
  children,
  style,
  direction,
  textColor,
  btn,
  link,
}) {
  console.log(style);
  return (
    <div className="DesignDream" style={{ flexDirection: direction }}>
      <div
        className="Dream-background"
        style={{ backgroundColor: style, color: textColor }}
      >
        <h3>{h3}</h3>
        <h1>{children}</h1>
        <Link to={link}>
        <button>{btn}</button>
        </Link>
   
      </div>
      <div className="Dream-image">
        <img src={src} alt="img" />
      </div>
    </div>
  );
}

export default DesignDream;
