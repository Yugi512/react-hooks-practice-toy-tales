import React, { useState } from "react";

function ToyCard({toy, deleteToy, likeCounter}) {
  const {id,name,image, likes} = toy;

  function handleClick(){
    fetch(`http://localhost:3001/toys/${toy.id}`,{
      method: "DELETE"
    })
    .then((r) => r.json())
    .then(() => deleteToy(toy))
  }

  function handleLike(){
    fetch(`http://localhost:3001/toys/${toy.id}`,{
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        likes: (likes + 1),
      })
    })
    .then((r) => r.json())
    .then((updatedToy) => likeCounter(updatedToy))
  }

  return (
    <div className="card" id={id}>
      <h2>{name}</h2>
      <img
        src={image}
        alt={name}
        className="toy-avatar"
      />
      <p>{likes} Likes </p>
      <button className="like-btn" onClick={handleLike}>Like {"<3"}</button>
      <button className="del-btn" id={id} onClick={handleClick} >Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
