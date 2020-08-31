import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import useStyles from './styles';
import useAuth from '../../store/auth/useAuth';

const Menu = (props) => {
  const {
    toggleDrawer,
    open,
  } = props;

  const { push } = useHistory();
  const { isLoggedIn } = useAuth();

  const classes = useStyles();

  return (
    <Drawer
      open={open}
      onClose={() => toggleDrawer(false)}
    >
      <div
        className={classes.list}
        role="presentation"
        onClick={() => toggleDrawer(false)}
        onKeyDown={() => toggleDrawer(false)}
      >
        <List>
          <ListItem button onClick={() => push('/')}>
            <ListItemText primary="Home" />
          </ListItem>
          <Divider />
          {isLoggedIn && (
            <>
              <ListItem button onClick={() => push('/favorites')}>
                <ListItemText primary="Favorites" />
              </ListItem>
              <Divider />
            </>
          )}
        </List>
      </div>
    </Drawer>
  );
};

Menu.propTypes = {
  toggleDrawer: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

export default Menu;
