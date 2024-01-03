import './App.css';
import Navbar from './components/Navbar';
import IndexComponent from './components/IndexComponent';
import React, { useState } from 'react';

function App() {
  const [isDarkMode, setIsdarkMode] = useState(false);

  const toggleTheme = () => {
    setIsdarkMode(!isDarkMode);
  };

  return (
    <div className={isDarkMode ? 'app dark-mode' : 'app light-mode'}>
      <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      <IndexComponent />
    </div>
  );
}

export default App;
