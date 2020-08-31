export const ACTIONS = {
  FETCH_VIDEOS: 'FETCH_VIDEOS',
  FETCH_VIDEOS_SUCCESS: 'FETCH_VIDEOS_SUCCESS',
  FETCH_VIDEOS_ERROR: 'FETCH_VIDEOS_ERROR',
  SET_SEARCH_TERM: 'SET_SEARCH_TERM',
  SET_CURRENT_VIDEO: 'SET_CURRENT_VIDEO',
};

function mapVideo(videoData) {
  return {
    id: videoData.id.videoId,
    image: videoData.snippet?.thumbnails?.medium?.url || '',
    title: videoData.snippet?.title || '',
    description: videoData.snippet?.description || '',
    publishTime: videoData.snippet?.publishTime,
  };
}

export const fetchVideosAction = (dispatch) => async (searchTerm) => {
  dispatch({ type: ACTIONS.FETCH_VIDEOS });

  try {
    const { result } = await window.gapi.client.youtube.search.list({
      part: ['id', 'snippet'],
      maxResults: 25,
      q: searchTerm,
    });
    const videos = result.items
      .filter((video) => video.id.kind === 'youtube#video')
      .map(mapVideo);

    dispatch({
      type: ACTIONS.FETCH_VIDEOS_SUCCESS,
      payload: { videos },
    });
    return videos;
  } catch (error) {
    dispatch({
      type: ACTIONS.FETCH_VIDEOS_ERROR,
      payload: { error: error.message },
    });
    return null;
  }
};

export const setSearchTermAction = (dispatch) => (searchTerm) => (
  dispatch({
    type: ACTIONS.SET_SEARCH_TERM,
    payload: { searchTerm },
  })
);

export const setCurrentVideoAction = (dispatch) => (video) => (
  dispatch({
    type: ACTIONS.SET_CURRENT_VIDEO,
    payload: { video },
  })
);
