import React from 'react'
import Element from './Element';

const Panelties = () => {
  const data = [
    { name: "pen", time: "1" },
    { name: "pen", time: "2" },
    { name: "pen", time: "3" },
    { name: "pen", time: "3" },
    { name: "pen", time: "3" },
    { name: "pen", time: "3" },
    { name: "pen", time: "3" },
    { name: "pen", time: "3" },
    { name: "pen", time: "3" },
    { name: "pen", time: "3" },
    { name: "pen", time: "3" },
    { name: "pen", time: "3" },
    { name: "pen", time: "3" },
    { name: "pen", time: "3" },
  ];
  return (
    <>
      <span className="heading center" style={{height:'6vh'}}>Panelties</span>
      <div className="historyElements scrollbar" id="style-3" style={{height:'40vh',overflowY:"scroll"}}>
        <ul className="list-group">
          {data.map((item, index) => {
            return <Element name={item.name} time={item.time} />;
          })}
        </ul>
      </div>
      </>
  )
}

export default Panelties
