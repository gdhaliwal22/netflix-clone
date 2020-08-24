import React from "react";
import "../Nav.css";

function Nav() {
  return (
    <div className="nav">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="Netflix Logo"
        className="nav__logo"
      />
      <img
        src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png"
        alt="Netflix Logo"
        className="nav__avatar"
      />
    </div>
  );
}

export default Nav;
