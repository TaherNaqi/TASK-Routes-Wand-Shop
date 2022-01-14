import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav className="navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">
        🪄Home🪄
      </Link>
    </nav>
  );
}

export default Navbar;
