import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { AuthProvider } from './store/auth/useAuth';
import { VideoProvider } from './store/video/useVideo';
import App from './App';

ReactDOM.render((
  <AuthProvider>
    <VideoProvider>
      <App />
    </VideoProvider>
  </AuthProvider>
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
