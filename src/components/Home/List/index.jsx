import React from 'react';
// import PropTypes from 'prop-types';

import useStyles from './styles';

const List = () => {
  const classes = useStyles();

  return (
    <div className={classes.root} />
  );
};

List.propTypes = {

};

export default List;
