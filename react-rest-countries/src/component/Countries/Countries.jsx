import React, { use } from "react";

const Countries = ({ countriesPromise }) => {
  const country = use(countriesPromise);
  console.log(country);
  return (
    <div>
      <h2>all country</h2>
    </div>
  );
};

export default Countries;
