import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { LocalMovies as MovieIcon } from '@material-ui/icons';
import { history } from '../../_helpers';

const DrawerList = () => {
  return (
    <List>
      <ListItem>
        <ListItemIcon onClick={() => history.push('/movies')}>
          <MovieIcon />
        </ListItemIcon>
        <ListItemText primary="My Movies" />
      </ListItem>
    </List>
  );
};

export default DrawerList;
