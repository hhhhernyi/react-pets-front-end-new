import { useState } from "react";

async function createPet(newPet) {
  const url = "http://localhost:3000/pets";
  try {
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(newPet),
    });
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.error(error.message);
  }
}

export default function NewPet() {
  const [newPet, setNewPet] = useState({
    name:'',
    age:'',
    breed:''
  });
 

  const handleSubmit = (event) => {
    event.preventDefault();
    createPet({ ...setNewPet, age: Number(newPet.age) });
  };

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setNewPet({ ...newPet, [name]: value });
  };

  return (
    <>
      Create a new pet~
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={newPet.name}
            onChange={handleChange}
          ></input>
        </label>
        <br />

        <label>
          Breed:
          <input
            type="text"
            name="breed"
            value={newPet.breed}
            onChange={handleChange}
          ></input>
        </label>
        <br />

        <label>
          Age:
          <input
            type="number"
            name="age"
            value={newPet.age}
            onChange={handleChange}
          ></input>
        </label>
        <br />

        <button type="submit">Create pet</button>
      </form>
    </>
  );
}
