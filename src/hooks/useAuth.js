import { useEffect, useState, useReducer } from 'react';
import GoogleAuth from '../auth';
import useGapi from './useGapi';

const initialState = {
  loading: true,
  user: null,
  loggedIn: false,
  error: false,
};

function reducer(state, action) {
  switch (action.type) {
    case 'login_successful':
      return {
        ...state, user: action.value, loading: false, loggedIn: true,
      };
    case 'not_logged_in':
      return {
        ...state, loading: false, loggedIn: false, user: null,
      };
    case 'set_error':
      return { ...state, error: action.value, loading: false };
    case 'set_loading':
      return { ...state, loading: true };
    default:
      throw new Error();
  }
}

function useAuth() {
  const [authInstance, setAuthInstance] = useState();
  const [state, dispatch] = useReducer(reducer, initialState);
  const gapi = useGapi();

  useEffect(() => {
    if (gapi) {
      const auth = new GoogleAuth(gapi);
      const currentUser = auth?.getCurrentUser()?.getBasicProfile();
      if (currentUser) {
        dispatch({ type: 'login_successful', value: currentUser });
      } else {
        dispatch({ type: 'not_logged_in' });
      }
      auth.onAuthChange((signStatus, user) => {
        if (signStatus) {
          // User is logged in
          dispatch({ type: 'login_successful', value: user });
        } else {
          // user is logged out
          dispatch({ type: 'not_logged_in' });
        }
      });
      setAuthInstance(auth);
    }
  }, [gapi]);

  const login = () => {
    dispatch({ type: 'set_loading' });
    authInstance.signIn();
  };

  const logout = () => {
    dispatch({ type: 'set_loading' });
    authInstance.signOut();
  };

  const {
    user, error, loading, loggedIn,
  } = state;

  return {
    login, logout, user, error, loading, loggedIn,
  };
}

export default useAuth;
