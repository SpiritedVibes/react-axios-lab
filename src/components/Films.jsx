import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Films() {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    axios.get('https://swapi.dev/api/films/')
      .then(response => {
        setFilms(response.data.results);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      <h2>Films</h2>
      {films.map((film, index) => (
        <div key={index}>
          <h3>{film.title}</h3>
        </div>
      ))}
    </div>
  );
}

export default Films;
