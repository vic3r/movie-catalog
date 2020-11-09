import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Grid, Button } from '@material-ui/core';

import Form from '../../components/Form';
import useStyles from './styles';
import { userActions } from '../../_actions';

const LoginPage = ({ login, logout }) => {
  const classes = useStyles();
  useEffect(() => {
    logout();
  }, [logout]);

  const [fields, setFields] = useState({
    username: '',
    password: '',
  });

  const handleChange = (prop) => (event) => {
    setFields({ ...fields, [prop]: event.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { username, password } = fields;
    if (username && password) {
      login(username, password);
    }
  };

  const handleClear = () => {
    window.location.reload();
  };

  return (
    <div data-testid="loginpage" className={classes.root}>
      <Grid align="center" container spacing={0}>
        <Grid item xs={12}>
          <h1>VMDB</h1>
        </Grid>
        <Grid item xs={12}>
          <Form
            testId="usernameinput"
            id="username-input"
            type="username"
            handleChange={handleChange('username')}
          />
        </Grid>
        <Grid item xs={12}>
          <Form
            testId="passwordinput"
            id="password-input"
            type="password"
            handleChange={handleChange('password')}
          />
        </Grid>
        <Grid className={classes.button} item xs={12}>
          <Button
            data-testid="loginbutton"
            style={{
              backgroundColor: '#3b5998',
              color: 'white',
            }}
            variant="contained"
            onClick={handleSubmit}
          >
            Log In
          </Button>
        </Grid>
        <Grid className={classes.button} item xs={12}>
          <Button
            data-testid="cancelbutton"
            fontSize="2vw"
            color="secondary"
            onClick={handleClear}
          >
            Cancel
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

const mapState = (state) => {
  const { loggingIn } = state.authentication;
  return { loggingIn };
};

const actionCreators = {
  login: userActions.login,
  logout: userActions.logout,
};

const connectedLoginPage = connect(mapState, actionCreators)(LoginPage);
export default withRouter(connectedLoginPage);
