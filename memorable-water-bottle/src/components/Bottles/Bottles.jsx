import React, { use, useEffect, useState } from "react";
import Bottle from "../Bottle/Bottle";
import "./index.css";
import { addToStoredCart, getStoredCart } from "../Utlities/LocalStorage";
const Bottles = ({ bottlesPromise }) => {
  const bottles = use(bottlesPromise);
  const [cart, setCart] = useState([]);

  //useEffect
  useEffect(() => {
    const storedCartId = getStoredCart();
    // console.log(storedCartId,bottles)
    const storedCart = [];
    for (const id of storedCartId) {
      console.log(id);
      const cartBottle = bottles.find((bottle) => bottle.id === id);
      if (cartBottle) {
        storedCart.push(cartBottle);
      }
    }
    console.log("storedCart", storedCart);
    setCart(storedCart);
  }, [bottles]);

  const handelAddToCart = (bottle) => {
    // console.log("bottla add" , bottle)
    const newBottle = [...cart, bottle];
    setCart(newBottle);
    //save the bottle is in the storage
    addToStoredCart(bottle.id);
  };
  return (
    <div>
      <h2>All Bottle: {bottles.length}</h2>
      <h4>Add To Cart: {cart.length}</h4>
      <div className="bottle-map">
        {bottles.map((bottle) => (
          <Bottle
            bottle={bottle}
            handelAddToCart={handelAddToCart}
            key={bottle.id}
          ></Bottle>
        ))}
      </div>
    </div>
  );
};

export default Bottles;
