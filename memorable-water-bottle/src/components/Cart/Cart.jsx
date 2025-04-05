import React from "react";
import "./Cart.css"
const Cart = ({ cart,handelRemoveFormCart }) => {
  return (
    <div className="cart-container">
      {cart.map((bottle) => (
        <div key={bottle.id}>
          <img className="img" src={bottle.img} alt="" />
          <button onClick={() =>handelRemoveFormCart(bottle.id)}>X</button>
        </div>
      ))}
    </div>
  );
};

export default Cart;
