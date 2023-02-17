import React from "react";
import History from "./History";

const Left = () => {
  return (
    <>
      <div className="lupper box center" style={{ height: "8vh",fontSize:"2rem" }}>
        Let's Go
      </div>
      <div className="llower box scrollbar" id="style-3" style={{ height:'84vh' ,overflowY:"scroll"}}>
        <History />
      </div>
    </>
  );
};

export default Left;
