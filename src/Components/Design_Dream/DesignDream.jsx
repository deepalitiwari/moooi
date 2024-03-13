import React from "react";
import "./DesignDreams.css";
function DesignDream({ h3, src, children, style, direction, textColor }) {
  console.log(style);
  return (
    <div className="DesignDream" style={{ flexDirection: direction }}>
      <div
        className="Dream-background"
        style={{ backgroundColor: style, color: textColor }}
      >
        <h3>{h3}</h3>
        <h1>{children}</h1>
      </div>
      <div className="Dream-image">
        <img src={src} alt="img" />
      </div>
    </div>
  );
}

export default DesignDream;
