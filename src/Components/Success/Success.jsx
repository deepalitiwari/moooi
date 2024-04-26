import React, { useState } from "react";
import "./Success.css";
import { RxCross2 } from "react-icons/rx";

const Success = ({ handleSuccess }) => {
  const handleRemove = () => {
    handleSuccess(false); // Call the handleSuccess function to close the Success component
  };

  return (
    <div className="success_msg">
      <div className="remove">
        <RxCross2 onClick={handleRemove} />
      </div>
      <p>Congratulations! You're logged in successfully...</p>
    </div>
  );
};

export default Success;
