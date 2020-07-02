import React, { useState } from 'react';
import PropTypes from 'prop-types';

import useGapi from '../../hooks/useGapi';
import Navbar from '../Navbar';
import Drawer from '../Drawer';
import useStyles from './styles';

export default function Layout({ children }) {
  const [openDrawer, setOpenDrawer] = useState(false);

  useGapi();

  const classes = useStyles();

  return (
    <div className={classes.grow}>
      <Navbar toggleDrawer={setOpenDrawer} />
      <Drawer
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
