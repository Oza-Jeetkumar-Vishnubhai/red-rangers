import React from "react";
import HistoryElement from "./HistoryElement";

const History = () => {
  const data = [
    { name: "a", time: "1" },
    { name: "b", time: "2" },
    { name: "c", time: "3" },
    { name: "c", time: "3" },
    { name: "c", time: "3" },
    { name: "c", time: "3" },
    { name: "c", time: "3" },
  ];
  return (
    <div className="container">
      <div className="historyElements">
        <ul className="list-group">
          {data.map((item, index) => {
            return <HistoryElement name={item.name} time={item.time} />;
          })}
        </ul>
      </div>
    </div>
  );
};

export default History;
