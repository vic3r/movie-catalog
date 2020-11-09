import React from 'react';
import { FormControl, InputLabel, Input } from '@material-ui/core';
import useStyles from './styles';

const Form = ({ testId, id, type, handleChange }) => {
  const classes = useStyles();

  return (
    <FormControl className={classes.formControl}>
      <InputLabel className={classes.inputLabel} htmlFor={id}>
        {type}
      </InputLabel>
      <Input data-testid={testId} id={id} type={type} onChange={handleChange} />
    </FormControl>
  );
};

export default Form;
