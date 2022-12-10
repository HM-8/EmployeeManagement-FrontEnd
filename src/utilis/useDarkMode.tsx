/* eslint-disable no-unused-expressions */
import { useState, useEffect, SetStateAction } from 'react';

const useDarkMode = () => {
  const [theme, setTheme] = useState('light');

  const setMode = (mode: any) => {
    localStorage.setItem('theme', mode);
    setTheme(mode);
  };

  const themeToggler = () => {
    theme === 'light' ? setMode('dark') : setMode('light');
  };

  useEffect(() => {
    const localTheme = localStorage.getItem('theme');
    localTheme && setTheme(localTheme);
  }, []);

  return [theme, themeToggler];
};

export default useDarkMode;
