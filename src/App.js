import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
// import ChallengesPage from './components/ChallengesPage';
// import IdeasPage from './components/IdeasPage';
// import QuizzesPage from './components/QuizzesPage';


function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <Header onPageChange={handlePageChange} />

      {/* Display different components based on the current "page" */}
      {currentPage === 'home' && <HomePage />}
      

      <Footer />
    </div>
  );
}

export default App;
