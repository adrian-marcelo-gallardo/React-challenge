import React from 'react';
// import PropTypes from 'prop-types';

import { useGeneralContext } from '../../context/General';
import List from './List';
import useStyles from './styles';

const Home = () => {
  const classes = useStyles();

  const [{ videoId }] = useGeneralContext();

  return (
    <div className={classes.root}>
      <iframe
        title="video"
        width="70%"
        height="500px"
        src={`https://www.youtube.com/embed/${videoId}`}
      />
      <List />
    </div>
  );
};

Home.propTypes = {

};

export default Home;
