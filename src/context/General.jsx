import React, {
  createContext,
  useReducer,
  useContext,
  useEffect,
} from 'react';
import PropTypes from 'prop-types';

import { reducer, initialState } from '../state';
import { setValue } from '../state/actions';

const Context = createContext(null);
export default Context;

export const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const { localStorage } = window;
    const videoData = localStorage.getItem('videoData');
    const videoDataParsed = videoData ? JSON.parse(videoData) : {};
    const action = setValue({
      key: 'videoData',
      value: videoDataParsed,
    });
    dispatch(action);
  }, []);

  useEffect(() => {
    function onUnload() {
      localStorage.setItem('videoData', JSON.stringify(state?.videoData || {}));
    }

    window.addEventListener('beforeunload', onUnload);

    return () => window.removeEventListener('beforeunload', onUnload);
  }, [state]);

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
