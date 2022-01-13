import React from "react";
import { Navigate, useParams } from "react-router-dom";
import wands from "../wands";
const Detail = () => {
  const { slug } = useParams();
  let wand = wands.find((wand) => wand.slug === slug);
  if (!wand) {
    return <Navigate to="*" />;
  }
  return (
    <>
      <img className="rounded mx-auto d-block" src={wand.imageUrl} />
      <p>Length: {wand.length}</p>
      <p>Wood type: {wand.wood}</p>
    </>
  );
};

export default Detail;
