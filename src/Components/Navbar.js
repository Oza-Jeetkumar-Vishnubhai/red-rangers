import React from "react";
import "../Styles/navbar.css";

const Navbar = () => {
  return (
    <div style={{ height: "8vh" }}>
      <nav class="navbar navbar-light bg-light">
        <div class="container-fluid">
          <div class="navbar-brand center">Navbar</div>
          <div class="d-flex">
            <div class="btn btn-outline-primary">GJ06E1333</div>
            {/* <button class="btn btn-outline-success" type="submit">
              Search
            </button> */}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
