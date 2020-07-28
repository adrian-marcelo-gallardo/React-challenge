import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';

import Button from '@material-ui/core/Button';
import { useGeneralContext } from '../../context/General';
import { setValue } from '../../state/actions';

import useStyles from './styles';

const UserActions = ({ isLoggedIn, onLogIn, onLogOut }) => {
  if (isLoggedIn) {
    return (
      <>
        <Button onClick={onLogOut}>
          Sign Out
        </Button>
      </>
    );
  }
  return (
    <>
      <Button onClick={onLogIn}>
        Sign In
      </Button>
    </>
  );
};

UserActions.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  onLogIn: PropTypes.func.isRequired,
  onLogOut: PropTypes.func.isRequired,
};

const Navbar = ({
  toggleDrawer, isLoggedIn, user, onLogIn, onLogOut, loading,
}) => {
  const classes = useStyles();

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
          {!loading && (
          <>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-haspopup="true"
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <UserActions
              user={user}
              isLoggedIn={isLoggedIn}
              onLogIn={onLogIn}
              onLogOut={onLogOut}
            />
          </>
          )}
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
