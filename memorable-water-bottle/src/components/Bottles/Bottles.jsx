import React, { use, useState } from "react";
import Bottle from "../Bottle/Bottle";
import "./index.css";
const Bottles = ({ bottlesPromise }) => {
  const bottles = use(bottlesPromise);
  const [cart, setCart] = useState([])
  const handelAddToCart = (bottle) =>{
    // console.log("bottla add" , bottle)
    const newBottle = [...cart, bottle]
    setCart(newBottle)
  }
  return (
    <div>
      <h2>All Bottle: {bottles.length}</h2>
      <h4>Add To Cart: {cart.length}</h4>
      <div className="bottle-map">
        {bottles.map((bottle) => (
          <Bottle bottle={bottle} handelAddToCart={handelAddToCart} key={bottle.id}></Bottle>
        ))}
      </div>
    </div>
  );
};

export default Bottles;
