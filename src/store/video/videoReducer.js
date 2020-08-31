import { ACTIONS } from './videoActions';

export const initialState = {
  loading: false,
  error: false,
  videos: [],
  video: null,
  searchTerm: 'wizeline',
};

export function videoReducer(state, action) {
  const { type, payload = {} } = action;

  switch (type) {
    case ACTIONS.FETCH_VIDEOS:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case ACTIONS.FETCH_VIDEOS_SUCCESS:
      return {
        ...state,
        loading: false,
        videos: payload.videos,
      };
    case ACTIONS.FETCH_VIDEOS_ERROR:
      return {
        ...state,
        loading: false,
        error: payload.error,
      };
    case ACTIONS.SET_SEARCH_TERM:
      return {
        ...state,
        searchTerm: payload.searchTerm,
      };
    case ACTIONS.SET_CURRENT_VIDEO:
      return {
        ...state,
        video: payload.video,
      };
    default:
      throw new Error(`Invalid action "${type}"`);
  }
}
