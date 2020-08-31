import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';

import useVideo from '../../store/video/useVideo';
import List from './List';
import useStyles from './styles';

const Home = () => {
  const classes = useStyles();
  const { video } = useVideo();
  const { replace } = useHistory();

  if (!video) {
    replace('/');
    return null;
  }

  const { id, title, description } = video;

  return (
    <div className={classes.root}>
      <div className={classes.video}>
        <iframe
          title="video"
          width="100%"
          height="500px"
          src={`https://www.youtube.com/embed/${id}`}
        />
        <div className={classes.videoDetails}>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Button>
            Guardar
          </Button>
        </div>
        <Typography
          variant="body2"
          color="textSecondary"
          component="p"
          className={classes.description}
        >
          {description}
        </Typography>
      </div>
      <List />
    </div>
  );
};

Home.propTypes = {

};

export default Home;
