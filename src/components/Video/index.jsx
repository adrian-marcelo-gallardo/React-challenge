import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import { useGeneralContext } from '../../context/General';
import List from './List';
import useStyles from './styles';

const Home = () => {
  const classes = useStyles();

  const [{ videoData }] = useGeneralContext();

  const { videoId, title, description } = videoData;

  return (
    <div className={classes.root}>
      <div className={classes.video}>
        <iframe
          title="video"
          width="100%"
          height="500px"
          src={`https://www.youtube.com/embed/${videoId}`}
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
