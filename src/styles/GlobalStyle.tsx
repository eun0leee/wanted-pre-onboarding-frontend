import { css } from '@emotion/react';
import emotionReset from 'emotion-reset';

const GlobalStyle = css`
  ${emotionReset}

  a {
    text-decoration: none;
    outline: none;
  }

  button {
    border: none;

    &:hover {
      cursor: pointer;
    }
  }

  input:focus {
    outline: none;
  }

  * {
    box-sizing: border-box;
    font-family: 'DotGothic16', sans-serif;
    font-size: 1rem;
  }

  main {
    max-width: 1280px;
    margin: 0 auto;
  }
`;

export default GlobalStyle;
