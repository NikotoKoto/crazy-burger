import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div><h1>Vous avez du vous trompez de page</h1>
    <h2>Veuillez retourner sur la page de connexion 
      <Link to="/"><button>ici</button></Link></h2></div>
  )
}
