import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
  palette: {
    primary: {
      main: '#dedee0',
    },
    secondary: {
      main: '#424bf5',
    },
  },
  typography: {
    fontFamily: ""
  }
});

theme = responsiveFontSizes(theme);

export default theme;