import React, { useState } from "react";
import "./Country.css";
const Country = ({ country ,handelVisitedCountry,handelVisitedFlag}) => {
  // console.log(handelVisitedCountry)
  const { name, flags, independent } = country;
  const [visited, setVisited] = useState(false);
  const handelVisited = () => {
    // if (visited === true) {
    //   setVisited(false);
    // } else {
    //   setVisited(true);
    // }
    setVisited(!visited)
    handelVisitedCountry(country)
  };
  return (
    <div className={`country ${visited && "country-visited"}`}>
      <p>{name.common}</p>
      <img src={flags?.png} alt="" />
      <p>{independent ? "free" : "Not free"}</p>
      <button onClick={handelVisited}>
        {visited ? "Visited" : "Not Visited"}
      </button>
      <button onClick={() => handelVisitedFlag(flags.png)}>Flag</button>
    </div>
  );
};

export default Country;
