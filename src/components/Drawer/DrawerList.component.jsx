import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { LocalMovies as MovieIcon, Home as HomeIcon } from '@material-ui/icons';
import { history } from '../../_helpers';

const DrawerList = () => {
  return (
    <List>
      <ListItem onClick={() => history.push('/home')}>
        <ListItemIcon>
          <HomeIcon />
        </ListItemIcon>
        <ListItemText primary="Home" />
      </ListItem>
      <ListItem onClick={() => history.push('/movies')}>
        <ListItemIcon>
          <MovieIcon />
        </ListItemIcon>
        <ListItemText primary="My Movies" />
      </ListItem>
    </List>
  );
};

export default DrawerList;
