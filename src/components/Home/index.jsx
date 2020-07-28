import React from 'react';
// import PropTypes from 'prop-types';

import { useGeneralContext } from '../../context/General';
import useStyles from './styles';

const Home = () => {
  const classes = useStyles();

  const [{ videoId }] = useGeneralContext();

  return (
    <div className={classes.root}>
      HOME
      {/* <iframe
        title="video"
        width="70%"
        height="500px"
        src={`https://www.youtube.com/embed/${videoId}`}
      /> */}
    </div>
  );
};

Home.propTypes = {

};

export default Home;
