import React from 'react'
import "../Styles/card.css"
import Element from './Element';

const Permissions = () => {
  const data = [
    { name: "p", time: "1" },
    { name: "p", time: "2" },
    { name: "p", time: "3" },
    { name: "p", time: "3" },
    { name: "p", time: "3" },
    { name: "p", time: "3" },
    { name: "p", time: "3" },
    { name: "p", time: "3" },
    { name: "p", time: "3" },
    { name: "p", time: "3" },
    { name: "p", time: "3" },
    { name: "p", time: "3" },
    { name: "p", time: "3" },
    { name: "p", time: "3" },
  ];
  return (
    <>
        <span className="heading center" style={{height:'6vh'}} >Permissions</span>
        <div className="historyElements scrollbar" id="style-3" style={{height:'40vh',overflowY:"scroll"}} >
          <ul className="list-group">
            {data.map((item, index) => {
              return <Element name={item.name} time={item.time} />;
            })}
          </ul>
        </div>
        </>
  )
}

export default Permissions
