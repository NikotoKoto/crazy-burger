import React from 'react'
import { Link, useParams } from 'react-router-dom'

export default function orderPage() {
    //state
    const {username} = useParams()
    
    //comportement

    //render
  return (
    <div>
        <h1>Bienvenue {username}</h1>
        <Link to="/"><button>Deconnexion</button></Link>
    </div>
  )
}
