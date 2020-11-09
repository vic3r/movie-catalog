import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { Grid, Button } from '@material-ui/core';

import Form from '../../components/Form';
import { userService } from '../../_services';
import { history } from '../../_helpers';
import useStyles from './styles';

const SignUp = () => {
  const classes = useStyles();

  const [fields, setFields] = useState({
    username: '',
    email: '',
    firstName: '',
    lastName: '',
    password: '',
  });

  const [isRegistered, setIsRegistered] = useState(false);

  const handleChange = (prop) => (event) => {
    setFields({ ...fields, [prop]: event.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { username, email, firstName, lastName, password } = fields;
    if (username && email && firstName && lastName && password) {
      userService
        .register(email, firstName, lastName, username, password)
        .then(() => setIsRegistered(true))
        .catch(() => setIsRegistered(false));
    }
  };

  if (isRegistered) {
    history.push('/login');
  }

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
            testId="emailinput"
            id="email-input"
            type="email"
            handleChange={handleChange('email')}
          />
        </Grid>
        <Grid item xs={12}>
          <Form
            testId="firstnameinput"
            id="firstname-input"
            type="first name"
            handleChange={handleChange('firstName')}
          />
        </Grid>
        <Grid item xs={12}>
          <Form
            testId="lastnameinput"
            id="lastname-input"
            type="last name"
            handleChange={handleChange('lastName')}
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
            Register
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default withRouter(SignUp);
