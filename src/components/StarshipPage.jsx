import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'

function StarshipPage() {
  const { id } = useParams()
  const [starship, setStarship] = useState(null)

  useEffect(() => {
    const fetchStarship = async () => {
      const response = await axios.get(`https://swapi.dev/api/starships/${parseInt(id) + 1}/`)
      setStarship(response.data)
    }
    fetchStarship()
  }, [id])

  return (
    <div>
      {starship ? (
        <div>
          <h2>{starship.name}</h2>
          <p>Model: {starship.model}</p>
          <p>Manufacturer: {starship.manufacturer}</p>
          <Link to="/starships">Back to Starship List</Link>
        </div>
      ) : (
        <p>Loading starship...</p>
      )}
    </div>
  )
}

export default StarshipPage