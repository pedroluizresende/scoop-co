import { createTheme } from '@mui/material';

const headingFont = 'Libre Baskerville, serif';
const bodyFont = 'Montserrat, sans-serif';

const theme = createTheme({
  palette: {
    background: {
      default: '#F6FAEF',
    },
    background2: {
      default: '#E4EEC1',
    },
    primary: {
      main: '#5B5051',
    },
    secondary: {
      main: '#A0D4AC',
    },
    terciary: {
      main: '#537A82',
    },
    white: {
      main: '#FFFFFF',
    },
    black: {
      main: '#292424',
    },
    success: {
      main: '#37ACA7',
    },
    error: {
      main: '#F9283B',
    },
  },
  typography: {
    h1: {
      fontSize: '100px',
      fontFamily: headingFont,
    },
    h2: {
      fontSize: '80px',
      fontWeight: 700,
      fontFamily: headingFont,
    },
    h3: {
      fontSize: '72px',
      fontFamily: headingFont,
    },
    h4: {
      fontSize: '48px',
      fontFamily: headingFont,
    },
    h5: {
      fontSize: '40px',
      fontFamily: headingFont,
    },
    h6: {
      fontSize: '32px',
      fontFamily: headingFont,
    },
    subtitle1: {
      fontSize: '18px',
      lineHeight: '25px',
      letterSpacing: '1.5px',
      fontFamily: bodyFont,
    },
    body1: {
      fontSize: '16px',
      fontWeight: 600,
      fontFamily: bodyFont,
      lineHeight: '22.4px',
    },
    body2: {
      fontSize: '14px',
      fontWeight: 400,
      fontFamily: bodyFont,
      lineHeight: '22px',
    },
  },
});

export default theme;
