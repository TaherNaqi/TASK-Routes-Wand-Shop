import React from "react";
import Wand from "./Wand";

const WandsList = ({ wands }) => {
  let wandListing = wands.map((wand) => <Wand wand={wand} key={wand.id} />);
  return (
    <div className="container-fluid">
      <h3>Ollivander's Wand Shop </h3>
      <div className="card-flex">{wandListing}</div>
    </div>
  );
};

export default WandsList;
