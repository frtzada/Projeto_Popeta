import React, { createContext, useState, useContext, useEffect } from 'react';
import { lightTheme, darkTheme } from '../styles/theme';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'dark';
  });

  useEffect(() => {
    const theme = isDarkMode ? darkTheme : lightTheme;
    
    // Aplicar variáveis CSS
    Object.entries(theme).forEach(([key, value]) => {
      if (typeof value === 'object') {
        // Para objetos aninhados (como gradient)
        Object.entries(value).forEach(([nestedKey, nestedValue]) => {
          document.documentElement.style.setProperty(
            `--${key}-${nestedKey}`,
            nestedValue
          );
        });
      } else {
        document.documentElement.style.setProperty(`--${key}`, value);
      }
    });

    // Salvar preferência do usuário
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(prev => !prev);
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme deve ser usado dentro de um ThemeProvider');
  }
  return context;
}; 