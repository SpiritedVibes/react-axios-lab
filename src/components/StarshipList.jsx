import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function StarshipList() {
  const [starships, setStarships] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    const fetchStarships = async () => {
      const response = await axios.get('https://swapi.dev/api/starships/')
      setStarships(response.data.results)
    };
    fetchStarships()
  }, [])

  return (
    <div>
      <h2>Starships</h2>
      <div>
        {starships.map((ship, index) => (
          <div key={index} onClick={() => navigate(`/starships/${index}`)}>
            <h3>{ship.name}</h3>
          </div>
        ))}
      </div>
    </div>
  )
}

export default StarshipList