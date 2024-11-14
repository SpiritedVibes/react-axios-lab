import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Nav from './components/Nav';
import Home from './components/Home';
import StarshipList from './components/StarshipList';
import StarshipPage from './components/StarshipPage';
import Films from './components/Films';
import Planets from './components/Planets';
import Characters from './components/Characters';
import NotFound from './components/NotFound';


function App() {
  return (
    <Router>
      <div>
        <Header /> 
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/starships" element={<StarshipList />} />
          <Route path="/starships/:id" element={<StarshipPage />} />
          <Route path="/films" element={<Films />} />
          <Route path="/planets" element={<Planets />} />
          <Route path="/characters" element={<Characters />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
