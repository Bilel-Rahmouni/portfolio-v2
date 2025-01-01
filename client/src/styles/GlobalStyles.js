import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root {
    --neon-blue: #00f3ff;
    --neon-purple: #9d00ff;
    --dark-bg: #000000;
    --cyber-gray: #1f1f1f;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Space Grotesk', sans-serif;
    background: var(--dark-bg);
    color: white;
    overflow-x: hidden;
  }

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: var(--cyber-gray);
  }

  ::-webkit-scrollbar-thumb {
    background: var(--neon-blue);
    border-radius: 4px;
  }
`;

export default GlobalStyles;
