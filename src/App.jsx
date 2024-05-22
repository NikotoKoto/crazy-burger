import { useState } from 'react'

import './App.css'

function App() {
  // state (etat, données)



  // comportements
const handleCo = () => {
  alert("bonjour Bob")

}

  //render
  return (
  <div>
    <h1>Bienvenue chez nous</h1>
    <h2>Connectez-vous!</h2>
    <form>
      <input placeholder='Entrez votre prénom...' required></input>
      <button onClick={handleCo}>Acceder à votre espace</button>
    </form>
  </div>)
}

export default App
