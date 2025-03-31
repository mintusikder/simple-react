import React from "react";
import "./Bottle.css"
const Bottle = ({ bottle,handelAddToCart }) => {
  const { img ,name,price,stock} = bottle;
  return (
    <div className="bottle-card">
      <img className="img" src={img} alt=""></img>
      <h3>{name}</h3>
      <p>${price}</p>
      <p>{stock} remaining</p>
      <button onClick={() => handelAddToCart(bottle)}>Buy Now</button>
    </div>
  );
};

export default Bottle;
