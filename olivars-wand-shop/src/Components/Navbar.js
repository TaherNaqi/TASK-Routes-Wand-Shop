import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav className="navbar-dark bg-dark padding-default">
      <Link className="navbar-brand" to="/">
        🪄Home🪄
      </Link>
    </nav>
  );
}

export default Navbar;
