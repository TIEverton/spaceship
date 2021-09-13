import { createGlobalStyle } from 'styled-components'
import imgBackground from '../assets/background.png'

export default createGlobalStyle`
  :root {
    --white900: #ffffff;

    --black900: #000000;
    --yellow500: #ffeb3b;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
    font-family: 'Press Start 2P', cursive;
  }

  @media (max-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }

  @media (max-width: 720px) {
    html {
      font-size: 87.5%;
    }
  }

  body {
    background: url(${imgBackground}) no-repeat center center fixed;
    background-size: cover;
    color: var(--yellow500);
    -webkit-font-smoothing: antialiased !important;
  }

  body, input, textarea, select, button {
    font: bold 1rem 'Space Mono', sans-serif;
  }

  button {
    cursor: pointer;
    border: 0;
  }

  strong, h1, h2, h3, h4, h5, h6 {
      font-weight: 700;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  input:disabled {
    cursor: not-allowed;
  }

  button:disabled {
    cursor: not-allowed;
  }
`
