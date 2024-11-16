import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'

const StarshipPage = () => {
  const { id } = useParams()
  const [starship, setStarship] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchStarshipData = async () => {
      try {
        const response = await axios.get(`https://swapi.dev/api/starships/${id}/`)
        setStarship(response.data)
      } catch (error) {
        setError('Error fetching starship data: ' + error.message)
      }
    }

    fetchStarshipData()
  }, [id]);

  if (error) {
    return <div>{error}</div>
  }

  if (!starship) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <h1>{starship.name || 'No Name Available'}</h1>
      <p><strong>Model:</strong> {starship.model || 'No model available'}</p>
      <p><strong>Manufacturer:</strong> {starship.manufacturer || 'No manufacturer available'}</p>
      <p><strong>Cost:</strong> {starship.cost_in_credits || 'N/A'}</p>
      <p><strong>Length:</strong> {starship.length || 'N/A'}</p>
      <p><strong>Max Speed:</strong> {starship.max_atmosphering_speed || 'N/A'}</p>
      <p><strong>Crew:</strong> {starship.crew}</p>
      <p><strong>Passengers:</strong> {starship.passengers}</p>
      <p><strong>Starship Class:</strong> {starship.starship_class}</p>
      <Link to="/starships">Return to Starship List</Link>
    </div>
  )
}

export default StarshipPage