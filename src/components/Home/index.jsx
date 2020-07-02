import React from 'react';
// import PropTypes from 'prop-types';
import List from './List';
import useStyles from './styles';

const Home = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <iframe
        title="video"
        width="70%"
        height="500px"
        src="https://www.youtube.com/embed/tgbNymZ7vqY"
      />
      <List />
    </div>
  );
};

Home.propTypes = {

};

export default Home;
