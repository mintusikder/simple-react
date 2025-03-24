import React from "react";

const Friend = ({ frien }) => {
  const { name, email } = frien;
  return (
    <div className="box">
      <h4>Name: {name}</h4>
      <p>email: {email}</p>
    </div>
  );
};

export default Friend;
