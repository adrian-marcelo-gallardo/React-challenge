import React from 'react';
import ReactDOM from 'react-dom';
import Loader from 'react-loader-spinner';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import Router from './components/Router';
import * as serviceWorker from './serviceWorker';
import theme from './theme';
import { Provider as GeneralContext } from './context/General';
import useGapi from './hooks/useGapi';

const App = () => {
  useGapi();

  if (window?.gapi?.client?.youtube) {
    return (
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Router />
      </ThemeProvider>
    );
  }

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
};

ReactDOM.render(
  <GeneralContext>
    <App />
  </GeneralContext>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
