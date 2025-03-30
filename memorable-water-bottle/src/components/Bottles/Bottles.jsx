import React, { use } from "react";
import Bottle from "../Bottle/Bottle";
import "./index.css";
const Bottles = ({ bottlesPromise }) => {
  const bottles = use(bottlesPromise);
  console.log(bottles);
  return (
    <div>
      <h2>All Bottle: {bottles.length}</h2>
      <div className="bottle-map">
        {bottles.map((bottle) => (
          <Bottle bottle={bottle} key={bottle.id}></Bottle>
        ))}
      </div>
    </div>
  );
};

export default Bottles;
