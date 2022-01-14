import React from "react";
import { Navigate, useParams } from "react-router-dom";
import wands from "../wands";
import Wand from "./Wand";
const Detail = () => {
  const { slug } = useParams();
  let pageWand = wands.find((pageWand) => pageWand.slug === slug);
  if (!pageWand) {
    return <Navigate to="*" />;
  }
  let recommended = wands
    .filter((wand) => wand.core != pageWand.core)
    .map((wand) => <Wand wand={wand} key={wand.id} />);
  return (
    <div className="container-fluid">
      <img className="center" src={pageWand.imageUrl} />
      <div className="card">
        <div className="card-header">
          <ul className="nav nav-tabs card-header-tabs">
            <li className="nav-item"> Specifications</li>
          </ul>
        </div>
        <div className="card-body">
          <p className="card-text">Length: {pageWand.length}</p>
          <p className="card-text">Wood type: {pageWand.wood}</p>
        </div>
      </div>
      <p>More wands:</p>
      <div className="card-flex">{recommended}</div>
    </div>
  );
};

export default Detail;
