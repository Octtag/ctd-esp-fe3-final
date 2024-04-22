import React, { createContext, useReducer, useMemo } from 'react';

export const GlobalContext = createContext();

const initialState = {
  theme: 'light',
  dentists: [] // Estado inicial para la lista de dentistas
};

export const GlobalProvider = ({ children }) => {
  const reducer = (state, action) => {
    switch (action.type) {
      case 'TOGGLE_THEME':
        return { ...state, theme: state.theme === 'light' ? 'dark' : 'light' };
      case 'SET_DENTISTS': // Acción para actualizar la lista de dentistas
        return { ...state, dentists: action.payload };
      default:
        throw new Error('Unhandled action type: ' + action.type);
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const contextValue = useMemo(() => ({
    theme: state.theme,
    dentists: state.dentists,
    toggleTheme: () => dispatch({ type: 'TOGGLE_THEME' }),
    setDentists: dentists => dispatch({ type: 'SET_DENTISTS', payload: dentists }) // Función para actualizar dentistas
  }), [state]);

  return (
    <GlobalContext.Provider value={contextValue}>
      {children}
    </GlobalContext.Provider>
  );
};


