import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Planets() {
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    axios.get('https://swapi.dev/api/planets/')
      .then(response => {
        setPlanets(response.data.results);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      <h2>Planets</h2>
      {planets.map((planet, index) => (
        <div key={index}>
          <h3>{planet.name}</h3>
        </div>
      ))}
    </div>
  );
}

export default Planets;
