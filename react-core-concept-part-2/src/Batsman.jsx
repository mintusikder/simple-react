import React, { useState } from "react";

const Batsman = () => {
  const [runs, setRuns] = useState(0);
  const handelSingle = () => {
    const updatedRun = runs + 1;
    setRuns(updatedRun);
  };
  const handelFour = () =>{
    const updateRun = runs + 4
    setRuns(updateRun)
  }
  return (
    <div>
      <h3>Player: Bangla Batsman</h3>
      {
        runs > 50 && <p>Your run 50</p>
      }
      <h1>Score: {runs}</h1>
      <button onClick={handelSingle}>Single</button>
      <button onClick={handelFour}>Four</button>
    </div>
  );
};

export default Batsman;
