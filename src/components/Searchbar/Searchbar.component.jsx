import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import CustomDrawer from '../Drawer';
import useStyles from './styles';

const Searchbar = ({ onTermSubmit }) => {
  const classes = useStyles();
  const onEnter = (event) => {
    if (event.keyCode === 13) {
      onTermSubmit(event.target.value);
    }
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <CustomDrawer />
          <Typography className={classes.title} variant="h6" noWrap>
            VMDB
          </Typography>
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
              onKeyDown={onEnter}
            />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Searchbar;
