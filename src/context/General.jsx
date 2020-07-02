import React, {
  createContext,
  useReducer,
  useContext,
} from 'react';
import PropTypes from 'prop-types';

import { reducer, initialState } from '../state';

const Context = createContext(null);
export default Context;

export const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Context.Provider
      value={[state, dispatch]}
    >
      { children }
    </Context.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.node,
};

Provider.defaultProps = {
  children: null,
};

export const useGeneralContext = () => useContext(Context);
