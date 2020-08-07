import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Navbar from '../Navbar';
import Drawer from '../Drawer';
import useStyles from './styles';
import useAuth from '../../hooks/useAuth';
import { useGeneralContext } from '../../context/General';
import { setValue } from '../../state/actions';

export default function Layout({ children }) {
  const {
    loggedIn,
    login,
    logout,
    user,
    loading,
  } = useAuth();

  const [, dispatch] = useGeneralContext();
  const [openDrawer, setOpenDrawer] = useState(false);
  const classes = useStyles();

  useEffect(() => {
    const action = setValue({
      key: 'user',
      value: user,
    });
    dispatch(action);
  }, [user, dispatch]);

  const navBarProps = {
    isLoggedIn: loggedIn,
    onLogIn: login,
    onLogOut: logout,
    user,
    loading,
  };

  return (
    <div className={classes.grow}>
      <Navbar toggleDrawer={setOpenDrawer} {...navBarProps} />
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
