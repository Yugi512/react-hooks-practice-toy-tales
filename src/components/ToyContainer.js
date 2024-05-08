import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({toyDisplay, deleteToy, likeCounter}) {
  return (
    <div id="toy-collection">{toyDisplay.map((toy) => <ToyCard key={toy.id} toy={toy} deleteToy={deleteToy} likeCounter={likeCounter}/>)}</div>
  );
}

export default ToyContainer;
