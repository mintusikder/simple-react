import React from "react";

const Singer = ({ sing }) => {
  console.log(sing);
  return (
    <div>
      <h5>name: {sing.name}</h5>
      <p>Age {sing.age}</p>
    </div>
  );
};

export default Singer;
