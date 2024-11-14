import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Characters() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios.get('https://swapi.dev/api/people/')
      .then(response => {
        setCharacters(response.data.results);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      <h2>Characters</h2>
      {characters.map((character, index) => (
        <div key={index}>
          <h3>{character.name}</h3>
        </div>
      ))}
    </div>
  );
}

export default Characters;
