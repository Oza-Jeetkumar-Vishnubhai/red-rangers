import React from "react";
import Permissions from "./Permissions.js";
import Panelties from "./Panelties.js";

const Right = () => {
  return (
    <div style={{paddingRight:'10px'}} >
      <div className="upper" style={{height:'46vh',overflowY:"hidden"}}  >
        <Permissions />
      </div>
      <div className="lower"  style={{height:'46vh',overflowY:"hidden"}} >
        <Panelties />
      </div>
    </div>
  );
};

export default Right;
