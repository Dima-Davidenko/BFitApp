import { createTheme, ThemeProvider } from '@mui/material';
import { App } from 'components/App';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from 'redux/store/store';
import './index.scss';
let theme = createTheme({
  palette: {
    text: {
      primary: '#212121',
      secondary: '#9B9FAA',
    },
    primary: {
      main: '#FC842D',
      contrastText: '#FFFFFF',
    },
    divider: '#9B9FAA',
  },
  typography: {
    fontFamily: 'Verdana',
    fontSize: 14,
    h1: {
      color: '#212121',
      fontWeight: 700,
      fontSize: 18,
    },
    button: {
      fontWeight: 700,
      fontSize: 14,
      letterSpacing: '0,04em',
      textTransform: 'none',
    },
    caption: {
      fontSize: 14,
      fontWeight: 400,
      color: '#9B9FAA',
    },
  },
  breakpoints: {
    values: {
      mobile: 0,
      tablet: 768,
      laptop: 1280,
    },
  },
  components: {
    MuiTextField: {
      defaultProps: {
        variant: 'standard',
      },
    },
    MuiButton: {
      defaultProps: {
        variant: 'contained',
      },
      styleOverrides: {
        root: {
          width: '210px',
          borderRadius: '30px',
          padding: '13px 25px 13px 25px',
        },
      },
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter basename="/BFitApp">
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <App />
          </PersistGate>
        </Provider>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
