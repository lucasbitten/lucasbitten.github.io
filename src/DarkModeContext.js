import React, { createContext, useContext, useState, useEffect } from 'react';

const DarkModeContext = createContext();

export const useDarkMode = () => useContext(DarkModeContext);

export const DarkModeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setIsDarkMode(darkModeMediaQuery.matches);

    const darkModeChangeListener = (event) => {
      setIsDarkMode(event.matches);
    };

    darkModeMediaQuery.addEventListener('change', darkModeChangeListener);

    return () => {
      darkModeMediaQuery.removeEventListener('change', darkModeChangeListener);
    };
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  const theme = isDarkMode ? 'dark' : 'light';

  const variables = {
    '--background': theme === 'dark' ? '#000' : '#fff',
    '--text': theme === 'dark' ? '#ccc' : '#333',
    '--cardBackground': theme === 'dark' ? '#333' : '#fff',
    '--cardImageBorder': theme === 'dark' ? '#000' : '#ddd'

  };

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      <div style={variables}>{children}</div>
    </DarkModeContext.Provider>
  );
};
