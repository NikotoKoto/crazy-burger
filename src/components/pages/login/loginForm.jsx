import React, { useState } from 'react'

export default function loginForm() {
      //state
  const [inputValue, setInputValue] = useState("");
  //comportements
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Bonjour ${inputValue}`);
    setInputValue("");
  };
  return (
    <div>
    <h1>Bievenue chez nous !</h1>
    <br />
    <h2>Conectez-vous</h2>
    <form action="submit" onSubmit={handleSubmit}>
      <input
        value={inputValue}
        onChange={handleChange}
        type="text"
        placeholder="Entrez votre prenom"
        required
      ></input>
      <button>Acceder à votre espace</button>
    </form>
  </div>
  )
}
