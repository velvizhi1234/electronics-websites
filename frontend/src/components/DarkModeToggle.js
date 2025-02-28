import React from 'react';
import { useDarkMode } from '../hooks/useDarkMode';

function DarkModeToggle() {
  const [darkMode, setDarkMode] = useDarkMode();

  return (
    <button onClick={() => setDarkMode(!darkMode)} className="dark-mode-toggle">
      {darkMode ? (
        <span role="img" aria-label="light-mode">
          ☀️
        </span>
      ) : (
        <span role="img" aria-label="dark-mode">
          🌙
        </span>
      )}
    </button>
  );
}

export default DarkModeToggle;          