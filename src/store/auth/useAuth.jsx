import React from 'react';
import { loginAction, logoutAction } from './authActions';
import { authReducer, initialState } from './authReducer';

const AuthContext = React.createContext(null);
const authStorageKey = 'REACT-CHALLENGE-AUTH';

export const AuthProvider = (props) => {
  const [state, dispatch] = React.useReducer(authReducer, {
    ...initialState,
    user: localStorage.getItem(authStorageKey) ? JSON.parse(localStorage.getItem(authStorageKey)) : null,
  });
  console.log(state.user);
  const value = {
    ...state,
    login: loginAction(dispatch),
    logout: logoutAction(dispatch),
    isLoggedIn: Boolean(state.user),
  };

  React.useEffect(() => {
    if (state.user) {
      localStorage.setItem(authStorageKey, JSON.stringify(state.user));
    } else {
      localStorage.removeItem(authStorageKey);
    }
  }, [state.user]);

  return (
    <AuthContext.Provider {...props} value={value} />
  );
};

function useAuth() {
  return React.useContext(AuthContext);
}

export default useAuth;
