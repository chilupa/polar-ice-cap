import { createMuiTheme, responsiveFontSizes } from '@material-ui/core';

const theme = responsiveFontSizes(
  createMuiTheme({
    typography: {
      fontFamily: [
        'Noto Sans JP',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
    },
  })
);

export default theme;
