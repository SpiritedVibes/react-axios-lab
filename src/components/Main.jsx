import React from 'react';
import { Routes, Route } from 'react-router-dom'
import Home from './Home';
import StarshipList from './StarshipList'
import StarshipPage from './StarshipPage'

function Main() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/starships" element={<StarshipList />} />
        <Route path="/starships/:id" element={<StarshipPage />} />
      </Routes>
    </main>
  )
}

export default Main