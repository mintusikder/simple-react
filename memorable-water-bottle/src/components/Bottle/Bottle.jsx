import React from "react";
import "./Bottle.css"
const Bottle = ({ bottle }) => {
  const { img } = bottle;
  return (
    <div className="bottle-card">
      <img className="img" src={img} alt=""></img>
    </div>
  );
};

export default Bottle;
