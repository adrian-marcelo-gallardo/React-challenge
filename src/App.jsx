import React from 'react';
import Loader from 'react-loader-spinner';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import Router from './components/Router';
import theme from './theme';
import useGapi from './hooks/useGapi';

export default () => {
  const gapi = useGapi();

  if (!gapi) {
    return (
      <div style={{ width: 'fit-content', margin: '100px auto' }}>
        <Loader
          type="Circles"
          width={50}
          height={50}
          color="#556cd6"
          visible
        />
      </div>
    );
  }
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router />
    </ThemeProvider>
  );
};
