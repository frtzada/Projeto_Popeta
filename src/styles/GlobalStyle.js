import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    /* Cores do tema claro */
    --primary: #4a90e2;
    --secondary: #2ecc71;
    --background: #ffffff;
    --surface: #f5f5f5;
    --text: #333333;
    --text-secondary: #666666;
    --border: #e0e0e0;
    --gradient-primary: linear-gradient(135deg, #4a90e2, #2ecc71);
  }

  [data-theme='dark'] {
    --primary: #64b5f6;
    --secondary: #4caf50;
    --background: #1a1a1a;
    --surface: #2d2d2d;
    --text: #ffffff;
    --text-secondary: #b0b0b0;
    --border: #404040;
    --gradient-primary: linear-gradient(135deg, #64b5f6, #4caf50);
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Poppins', sans-serif;
    background-color: var(--background);
    color: var(--text);
    line-height: 1.6;
  }

  button {
    cursor: pointer;
    border: none;
    background: none;
    font-family: inherit;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

export default GlobalStyle; 