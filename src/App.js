import "./App.css";
import Navbar from "./Components/Navbar";
import Left from "./Components/Left";
import Right from "./Components/Right";
import { useState,useRef } from "react";
import WebcamComponent from "./Components/WebcamComponent";

function App() {
  const [cam, setCam] = useState(false);
  const windowSize = useRef([window.innerWidth, window.innerHeight]);
  return (
    <>
    <div style={{
      width:'100%',
      height:'100vh',
      overflow:'hidden',
    }} >
      <Navbar />
      {!cam && (
        <div className="row" style={{height:"92vh"}} >
          <div className="col-8">
            <Left />
          </div>
          <div className="col-4">
            <Right />
          </div>
        </div>
      )}
      </div>
      {
        cam && (
          <WebcamComponent />
        )
      }
    </>
  );
}

export default App;
