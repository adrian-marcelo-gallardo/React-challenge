import React, { useState } from 'react';
import Loader from 'react-loader-spinner';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import Avatar from '@material-ui/core/Avatar';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

import { useGeneralContext } from '../../context/General';
import { setValue } from '../../state/actions';

import useStyles from './styles';

const Navbar = (props) => {
  const {
    toggleDrawer,
    isLoggedIn,
    user,
    onLogIn,
    onLogOut,
    loading,
  } = props;

  const classes = useStyles();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  function handleClose() {
    setAnchorEl(null);
  }

  const handleSession = () => {
    if (isLoggedIn) {
      onLogOut();
    } else {
      onLogIn();
    }
    handleClose();
  };

  const [{ searchTerm }, dispatch] = useGeneralContext();

  const handleOnChange = (e) => {
    const { value } = e.target;

    const action = setValue({
      key: 'searchTerm',
      value,
    });
    dispatch(action);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="open drawer"
          onClick={() => toggleDrawer(true)}
        >
          <MenuIcon />
        </IconButton>
        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase
            placeholder="Search…"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            inputProps={{ 'aria-label': 'search' }}
            onChange={handleOnChange}
            value={searchTerm}
          />
        </div>
        <div className={classes.grow} />
        <div className={classes.sectionDesktop}>
          <div>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-haspopup="true"
              color="inherit"
              onClick={handleMenu}
            >
              {loading ? (
                <Loader
                  type="Circles"
                  width={20}
                  height={20}
                  color="white"
                  visible
                />
              ) : (
                <Avatar
                  src={user?.getImageUrl()}
                  alt="user"
                />
              )}
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={open}
              onClose={handleClose}
            >
              <MenuItem onClick={handleSession}>
                {isLoggedIn ? 'Cerrar Sesion' : 'Iniciar sesion'}
              </MenuItem>
            </Menu>
          </div>
        </div>
      </Toolbar>
    </AppBar>
  );
};

Navbar.propTypes = {
  toggleDrawer: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
  user: PropTypes.any,
  loading: PropTypes.any.isRequired,
  onLogIn: PropTypes.func.isRequired,
  onLogOut: PropTypes.func.isRequired,

};

export default Navbar;
