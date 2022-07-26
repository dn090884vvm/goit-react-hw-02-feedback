import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'components/App';
import './index.css';
import { ThemeProvider } from 'styled-components';
import { theme } from './components/constants/theme';
import { SectionWrapper } from './components/Sectionwrapper/Sectionwrapper.styled';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <SectionWrapper>
        <App />
      </SectionWrapper>
    </ThemeProvider>
  </React.StrictMode>
);
