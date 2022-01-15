import React from "react";
import { Link } from "react-router-dom";

const Wand = ({ wand }) => {
  return (
    <div className="card" style={{ width: "15rem" }}>
      <img
        src={wand.imageUrl}
        className="card-img-top margin-default"
        style={{ width: "237px", height: "150px" }}
        alt={wand.core}
      />
      <div className="card-body">
        <h5 className="card-title fw-bold">{wand.core}</h5>
        <p className="card-text">
          Specifications about this {wand.core} wand can be found by clicking
          the link below.
        </p>
        <Link to={`/wands/${wand.slug}`} className="btn btn-dark">
          Explore {wand.core}
        </Link>
      </div>
    </div>
  );
};

export default Wand;
