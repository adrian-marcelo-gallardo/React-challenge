import React from 'react';
import { useHistory } from 'react-router-dom';
import { useGeneralContext } from '../../context/General';
import useYoutubeSearch from '../../hooks/useYoutubeSearch';
import { setValues } from '../../state/actions';
import Card from '../Card';
import useStyles from './styles';

const Home = () => {
  const classes = useStyles();

  const [{ searchTerm }, dispatch] = useGeneralContext();

  const { push } = useHistory();
  const list = useYoutubeSearch(searchTerm);

  function handleOnClick(videoData) {
    const { videoId } = videoData;
    push(`/${videoId}`);

    const action = setValues(videoData);
    dispatch(action);
  }

  return (
    <div className={classes.root}>
      {list.map(({ etag, id, snippet }) => (id.videoId ? (
        <Card
          key={etag}
          img={snippet?.thumbnails?.medium?.url || ''}
          title={snippet?.title || ''}
          description={snippet?.description || ''}
          publishTime={snippet?.publishTime || ''}
          videoId={id.videoId}
          onClick={handleOnClick}
        />
      ) : null))}
    </div>
  );
};

Home.propTypes = {

};

export default Home;
