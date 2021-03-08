import React from "react";

// Stateless Functional Component

const NavBar = ({ totalCounters }) => {
  return (
    <React.Fragment>
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="about:blank">
          Navbar{" "}
          <span className="badge badge-pill badge-secondary">
            {totalCounters}
          </span>
        </a>
      </nav>
    </React.Fragment>
  );
};

export default NavBar;
