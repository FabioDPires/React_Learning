import React, { Component } from "react";

//Stateless Funcional Component => This component has no state and helper methods, so we can convert it to a function

const NavBar = ({ totalCounters }) => {
  //Props was desconstructed  , before ===> (props) and to use totalCounters ===> props.totalCounters
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar{" "}
        <span className="badge badge-pill badge-secondary">
          {totalCounters}
        </span>
      </a>
    </nav>
  );
};

export default NavBar;
