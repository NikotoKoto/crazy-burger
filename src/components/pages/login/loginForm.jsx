import React, { useState } from 'react'
import { Link } from 'react-router-dom';

export default function loginForm() {
      //state
  const [inputValue, setInputValue] = useState("");
  //comportements
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
    <h1>Bievenue chez nous !</h1>
    <br />
    <h2>Conectez-vous</h2>
    <form action="submit">
      <input
        value={inputValue}
        onChange={handleChange}
        type="text"
        placeholder="Entrez votre prenom"
        required
      ></input>
      <Link to="/order"><button>Acceder à votre espace</button></Link>
    </form>
  </div>
  )
}
