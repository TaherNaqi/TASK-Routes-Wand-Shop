import React from "react";
import Wand from "./Wand";

const WandsList = ({ wands }) => {
  let wandListing = wands.map((wand) => <Wand wand={wand} key={wand.id} />);
  return (
    <div className="container">
      <h3 className="margin-default fw-bold">Ollivander's Wand Shop </h3>
      <div className="card-flex card-listing">{wandListing}</div>
    </div>
  );
};

export default WandsList;
