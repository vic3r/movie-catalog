import React from 'react';
import { Grid, Fab } from '@material-ui/core';
import useStyles from './styles';

const getModalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  marginRight: '-50%',
  transform: 'translate(-50%, -50%)',
};

const ConfirmationCard = ({ handlePurchase, handleClose }) => {
  const classes = useStyles();

  return (
    <div style={getModalStyle}>
      <Grid className={classes.paper} container spacing={1}>
        <Grid item xs={12}>
          <p>Are you sure you want to purchase?</p>
        </Grid>
        <Grid item xs={6}>
          <Fab
            data-testid="confirmbutton"
            style={{
              backgroundColor: 'green',
              color: 'white',
            }}
            variant="contained"
            onClick={handlePurchase}
          >
            Confirm
          </Fab>
        </Grid>
        <Grid item xs={6}>
          <Fab
            data-testid="cancelbutton"
            fontSize="2vw"
            color="secondary"
            variant="contained"
            onClick={handleClose}
          >
            Cancel
          </Fab>
        </Grid>
      </Grid>
    </div>
  );
};

export default ConfirmationCard;
