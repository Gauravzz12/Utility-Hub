import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './components/HomePage';
import Brain from './components/Brain';
import Mood from './components/Mood';
import Ideas from './components/Ideas';
import MemoryGame from './components/MemoryGame';
import Riddle from './components/Riddle'
function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/brain" element={<Brain />} />
          <Route path="/mood" element={<Mood />} />
          <Route path="/ideas" element={<Ideas />} />
          <Route path="/memory-game" element={<MemoryGame />} />
          <Route path="/Riddle" element={<Riddle />} />
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;
