import React, { use, useState } from "react";
import Country from "./Country";

const Countries = ({ countriesPromise }) => {
  const [visitedCountries, setVisitedCountries] = useState([]);
  const [visitedFleg, setVisitedFlag] = useState([]);
  const countries = use(countriesPromise);

  const handelVisitedFlag = (flag) => {
    const newVisitedFlag = [...visitedFleg, flag];
    setVisitedFlag(newVisitedFlag);
  };

  const handelVisitedCountry = (country) => {
    const newVisitedCountry = [...visitedCountries, country];
    setVisitedCountries(newVisitedCountry);
    console.log("visited", country);
  };
  return (
    <div>
      <h2>all country: {countries.length}</h2>
      <h3>Travel Country: {visitedCountries.length}</h3>
      <div>
        {visitedFleg.map((flag) => (
          <img key={flag.cca2} src={flag}></img>
        ))}
      </div>
      <div className="countries">
        {countries.map((country) => (
          <Country
            key={country.cca2}
            handelVisitedCountry={handelVisitedCountry}
            handelVisitedFlag={handelVisitedFlag}
            country={country}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
