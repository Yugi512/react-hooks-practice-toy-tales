import React,{useState} from "react";

function ToyForm({onToySubmit}) {
  const [newToy, setNewToy] = useState({
    name: "",
    image: "",
    likes: 0,
  })
  function handleChange(event){
    setNewToy({
      ...newToy,
      [event.target.id]: event.target.value
    })
  }

  function handleSubmit(e){
    e.preventDefault()
    fetch("http://localhost:3001/toys",{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newToy)
    })
    .then((r) => r.json())
    .then((toy) => onToySubmit(toy) )
  }


  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={(e) => handleSubmit(e)} >
        <h3>Create a toy!</h3>
        <input
          type="text"
          id="name"
          value={newToy.name}
          placeholder="Enter a toy's name..."
          className="input-text"
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          id="image"
          value={newToy.image}
          placeholder="Enter a toy's image URL..."
          className="input-text"
          onChange={handleChange}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
