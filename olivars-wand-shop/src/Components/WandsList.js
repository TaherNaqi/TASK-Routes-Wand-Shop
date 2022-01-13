import React from "react";
import Wand from "./Wand";

const WandsList = ({ wands }) => {
  let wandListing = wands.map((wand) => <Wand wand={wand} key={wand.id} />);
  return <div className="card-flex">{wandListing}</div>;
};

export default WandsList;
