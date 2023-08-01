import { Global, ThemeProvider } from '@emotion/react';
import ReactDOM from 'react-dom/client';
import App from './App';
import GlobalStyle from './styles/GlobalStyle.tsx';
import theme from './styles/theme.ts';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <ThemeProvider theme={theme}>
    <Global styles={GlobalStyle} />
    <App />
  </ThemeProvider>,
);
