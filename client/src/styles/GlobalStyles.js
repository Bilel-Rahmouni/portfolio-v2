import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root {
    --bg: #0c0c0e;
    --bg-elevated: #131316;
    --bg-subtle: #1a1a1f;
    --border: rgba(255, 255, 255, 0.08);
    --border-hover: rgba(255, 255, 255, 0.14);
    --text: #e4e4e7;
    --text-muted: #71717a;
    --text-subtle: #a1a1aa;
    --accent: #58a6ff;
    --accent-muted: rgba(88, 166, 255, 0.1);
    --space-xs: 8px;
    --space-sm: 12px;
    --space-md: 16px;
    --space-lg: 24px;
    --space-xl: 48px;
    --space-2xl: 80px;
    --section-y: 96px;
    --content-max: 1080px;
    --font-sans: 'IBM Plex Sans', sans-serif;
    --font-mono: 'JetBrains Mono', monospace;

    --dark-bg: var(--bg);
    --neon-blue: var(--accent);
    --neon-purple: #8b949e;
    --cyber-gray: var(--bg-subtle);
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
    scroll-padding-top: 80px;
  }

  body {
    font-family: var(--font-sans);
    background: var(--bg);
    color: var(--text);
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  ::selection {
    background: var(--accent-muted);
    color: var(--text);
  }

  ::-webkit-scrollbar {
    width: 6px;
  }

  ::-webkit-scrollbar-track {
    background: var(--bg);
  }

  ::-webkit-scrollbar-thumb {
    background: var(--bg-subtle);
    border-radius: 3px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: var(--text-muted);
  }
`;

export default GlobalStyles;
