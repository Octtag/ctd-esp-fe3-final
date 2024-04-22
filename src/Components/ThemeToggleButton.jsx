import React, { useContext } from 'react';
import { GlobalContext } from './GlobalProvider';

const ThemeToggleButton = () => {
  const { toggleTheme } = useContext(GlobalContext);

  return (
    <button onClick={toggleTheme}>Cambiar tema</button>
  );
};

export default ThemeToggleButton;
