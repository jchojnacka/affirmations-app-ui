import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import affirmations from './affirmations';

function App() {
  const getRandomAffirmation = () => {
    const randomIndex = Math.floor(Math.random() * affirmations.length);
    return affirmations[randomIndex];
  };

  const [currentAffirmation, setCurrentAffirmation] = useState(getRandomAffirmation());

  const handleLogoClick = () => {
    const newAffirmation = getRandomAffirmation();
    setCurrentAffirmation(newAffirmation);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="logo-title">Positivity Potion</div>
        <img src={logo} className="App-logo" alt="logo" />
        <div className='affirmation'><p>{currentAffirmation}</p></div>
        <div class="frame">
          <button className="custom-btn btn-3" onClick={handleLogoClick}><span>🪄 New Sparkle</span></button>
        </div>
      </header>
    </div>
  );
}

export default App;