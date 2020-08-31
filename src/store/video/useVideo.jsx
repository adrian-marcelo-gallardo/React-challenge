import React from 'react';
import { fetchVideosAction, setSearchTermAction, setCurrentVideoAction } from './videoActions';
import { videoReducer, initialState } from './videoReducer';

const AuthContext = React.createContext(null);
const videoStorageKey = 'REACT-CHALLENGE-VIDEO';

export const VideoProvider = (props) => {
  const [state, dispatch] = React.useReducer(videoReducer, {
    ...initialState,
    video: localStorage.getItem(videoStorageKey) ? JSON.parse(localStorage.getItem(videoStorageKey)) : null,
  });

  const value = {
    ...state,
    fetchVideos: fetchVideosAction(dispatch),
    setSearchTerm: setSearchTermAction(dispatch),
    setCurrentVideo: setCurrentVideoAction(dispatch),
  };

  React.useEffect(() => {
    if (state.video) {
      localStorage.setItem(videoStorageKey, JSON.stringify(state.video));
    } else {
      localStorage.removeItem(videoStorageKey);
    }
  }, [state.video]);

  return (
    <AuthContext.Provider {...props} value={value} />
  );
};

function useVideo() {
  return React.useContext(AuthContext);
}

export default useVideo;
