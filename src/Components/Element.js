import React from "react";

const Element = ({ name, time }) => {
  return (
    <div>
      <li className="list-group-item">
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <div style={{ width: "20%" }}>{name}</div>
          <div>{time}</div>
        </div>
      </li>
    </div>
  );
};

export default Element;
