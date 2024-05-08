import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toyDisplay, setToyDisplay] = useState([])
  
  useEffect(() => {
    fetch("http://localhost:3001/toys")
    .then((r) => r.json())
    .then((toys) => setToyDisplay(toys))
  },[])

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }
  function addNewToy(newToy){
    setToyDisplay([...toyDisplay, newToy])
  }

  function deleteToy(deletedToy){
    const updatedDisply = toyDisplay.filter((toy) => toy.id !== deletedToy.id)
    setToyDisplay(updatedDisply)
  }

  function likeIncrease(updatedToy){
    const updatedToys = toyDisplay.map((toy) => {
      if(toy.id === updatedToy.id){
        return updatedToy;
      } else {return toy};
    });
    setToyDisplay(updatedToys)
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm onToySubmit={addNewToy} /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toyDisplay={toyDisplay} deleteToy={deleteToy} likeCounter={likeIncrease}/>
    </>
  );
}

export default App;
