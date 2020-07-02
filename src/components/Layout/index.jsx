import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Navbar from '../Navbar';
import Menu from '../Menu';
import useStyles from './styles';

export default function Layout({ children }) {
  const [openDrawer, setOpenDrawer] = useState(false);

  const classes = useStyles();

  return (
    <div className={classes.grow}>
      <Navbar toggleDrawer={setOpenDrawer} />
      <Menu
        open={openDrawer}
        toggleDrawer={setOpenDrawer}
      />
      {children}
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};
