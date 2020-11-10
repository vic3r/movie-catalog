import React from 'react';
import { withRouter } from 'react-router-dom';
import { Grid, Button } from '@material-ui/core';
import useStyles from './styles';

const Root = (props) => {
  const classes = useStyles();
  const navigateToLogin = () => {
    props.history.push('/login');
  };
  const navigateToRegister = () => {
    props.history.push('/register');
  };

  return (
    <div data-testid="loginpage" className={classes.root}>
      <Grid align="center" container spacing={0}>
        <Grid item xs={12}>
          <h1>VMDB</h1>
        </Grid>
        <Grid className={classes.button} item xs={12}>
          <Button
            data-testid="buttontologin"
            style={{
              backgroundColor: '#3b5998',
              color: 'white',
            }}
            variant="contained"
            onClick={navigateToLogin}
          >
            Log In
          </Button>
        </Grid>
        <Grid className={classes.button} item xs={12}>
          <Button
            data-testid="buttontoregister"
            style={{
              backgroundColor: '#3b5998',
              color: 'white',
            }}
            variant="contained"
            onClick={navigateToRegister}
          >
            Sign Up
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default withRouter(Root);
