import React from 'react';
import { useHistory } from 'react-router-dom';
import Card from '../Card';
import useStyles from './styles';
import useVideo from '../../store/video/useVideo';

const Home = () => {
  const classes = useStyles();
  const { push } = useHistory();
  const { videos, setCurrentVideo } = useVideo();

  function handleOnClick(video) {
    setCurrentVideo(video);
    push(`/${video.id}`);
  }

  return (
    <div className={classes.root}>
      {videos.map((video) => (
        <Card
          key={video.id}
          img={video.image}
          title={video.title}
          description={video.description}
          publishTime={video.publishTime}
          onClick={() => handleOnClick(video)}
        />
      ))}
    </div>
  );
};

export default Home;
