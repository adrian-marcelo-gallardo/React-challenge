import React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import Router from './components/Router';
import * as serviceWorker from './serviceWorker';
import theme from './theme';
import { Provider as GeneralContext } from './context/General';

ReactDOM.render(

  <ThemeProvider theme={theme}>
    <GeneralContext>

      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      <Router />
    </GeneralContext>
  </ThemeProvider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
