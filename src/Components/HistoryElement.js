import React from "react";
import photo from "../Assets/Images/download.jfif";

const HistoryElement = ({ name, time }) => {
  return (
    <li className="list-group-item">
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <div style={{ width: "20%" }}>{name}</div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            width: "80%",
          }}
        >
          <div>
            <img src={photo} alt="photo" />
          </div>
          <div>
            <img src={photo} alt="photo" />
          </div>
        </div>
      </div>
    </li>
  );
};

export default HistoryElement;
