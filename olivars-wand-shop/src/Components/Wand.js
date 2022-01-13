import React from "react";
import { Link } from "react-router-dom";

const Wand = ({ wand }) => {
  return (
    <div className="card" style={{ width: "20rem" }}>
      <img src={wand.imageUrl} className="card-img-top" alt={wand.core} />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <Link to={`/wands/${wand.slug}`} className="btn btn-secondary">
          Explore {wand.core}
        </Link>
      </div>
    </div>
  );
};

export default Wand;
