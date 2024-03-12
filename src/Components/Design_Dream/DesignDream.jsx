import React from "react";
import "./DesignDreams.css";
function DesignDream({ h3, src, children }) {
  return (
    <div className="DesignDream">
      <div className="Dream-background">
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
