import React from "react";
import "./Country.css";
const Country = ({ country }) => {
  const { name, flags, independent } = country;
    const handelVisited = () =>{
            console.log("fff")
    }
  return (
    <div className="country">
      <p>{name.common}</p>
      <img src={flags?.png} alt="" />
      <p>{independent ? "free" : "Not free"}</p>
      <button onClick={handelVisited}>Not Details</button>
    </div>
  );
};

export default Country;
