import React from 'react';
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
import { useHistory, useLocation } from 'react-router-dom';

import LoginPrompt from '../LoginPrompt/LoginPrompt';

import useStyles from './styles';
import useAuth from '../../store/auth/useAuth';
import useVideo from '../../store/video/useVideo';

const Navbar = ({ toggleDrawer }) => {
  const classes = useStyles();
  const { user, isLoggedIn, logout } = useAuth();
  const { searchTerm, setSearchTerm, fetchVideos } = useVideo();
  const { push } = useHistory();
  const location = useLocation();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [loginDialogOpen, setLoginDialogOpen] = React.useState(false);

  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  function handleMenuItemClose() {
    setAnchorEl(null);
  }

  const doLogin = () => {
    setLoginDialogOpen(true);
    handleMenuItemClose();
  };

  const doLogout = () => {
    logout();
    handleMenuItemClose();
  };

  const handleSearchTermChanged = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      fetchVideos(searchTerm);

      if (location.pathname !== '/') {
        push('/');
      }
    }
  };

  React.useEffect(() => {
    fetchVideos(searchTerm);
  }, []);

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
            onChange={handleSearchTermChanged}
            onKeyDown={handleKeyDown}
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
              <Avatar
                src={user?.avatarUrl}
                alt="user"
              />
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
              onClose={handleMenuItemClose}
            >
              {isLoggedIn ? (
                <MenuItem onClick={doLogout}>Cerrar Sesion</MenuItem>
              ) : (
                <MenuItem onClick={doLogin}>Iniciar sesion</MenuItem>
              )}
            </Menu>
          </div>
        </div>
      </Toolbar>
      <LoginPrompt isOpen={loginDialogOpen} close={() => setLoginDialogOpen(false)} />
    </AppBar>
  );
};

Navbar.propTypes = {
  toggleDrawer: PropTypes.func.isRequired,
};

export default Navbar;
