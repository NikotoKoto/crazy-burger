import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function loginForm() {
  //state
  const navigate = useNavigate();
  const [username, setUsername] = useState("");

  //comportements
  const handleChange = (event) => {
    setUsername(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setUsername("");
    navigate(`/order/${username}`);
  };

  //render
  return (
    <form action="submit" onSubmit={handleSubmit}>
      <h1>Bievenue chez nous !</h1>
      <br />
      <h2>Conectez-vous</h2>
      <input
        value={username}
        onChange={handleChange}
        type="text"
        placeholder="Entrez votre prenom"
        required
      ></input>
      <button>Acceder à votre espace</button>
    </form>
  );
}

/** */
