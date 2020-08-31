import React, { Fragment } from 'react';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';

import useStyles from './styles';
import useVideo from '../../../store/video/useVideo';

const List = () => {
  const classes = useStyles();
  const { videos, setCurrentVideo } = useVideo();

  const handleNewVideo = (video) => {
    setCurrentVideo(video);
  };

  return (
    <div className={classes.root}>
      {videos.map((video) => (
        <Fragment key={video.etag}>
          <div className={classes.listItem} onClick={() => handleNewVideo(video)}>
            <img
              className={classes.img}
              src={video.image}
              alt="image"
            />
            <div className={classes.details}>
              <Typography>
                {video.title}
              </Typography>
            </div>
          </div>
          <Divider />
        </Fragment>
      ))}
    </div>
  );
};

export default List;
