import React, { useState } from 'react';
import clsx from 'clsx';
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Collapse,
  IconButton,
  Typography,
  Modal,
} from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShopOutlinedIcon from '@material-ui/icons/ShopOutlined';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ConfirmationCard from '../ConfirmationCard';

import useStyles from './styles';
import { history } from '../../_helpers';
import { addMovie } from '../../utils/apis/movie-api';

const MovieCard = (props) => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const purchaseMovie = () => {
    addMovie(props.id)
      .then(() => history.push('/home'))
      .catch(() => console.log('error purchasing'));
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={props.title}
        subheader={props.director}
        style={{ color: 'white' }}
      />
      <CardMedia className={classes.media} image={props.image} title="Paella dish" />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.year}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon style={{ color: 'white' }} />
        </IconButton>
        <IconButton aria-label="shop" onClick={handleOpen}>
          <ShopOutlinedIcon style={{ color: 'white' }} />
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
          >
            <ConfirmationCard handlePurchase={purchaseMovie} handleClose={handleClose} />
          </Modal>
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon style={{ color: 'white' }} />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>{`Actors: ${props.actors}`}</Typography>
          <Typography paragraph>{`Genre: ${props.genre}`}</Typography>
          <Typography paragraph>{`Duration: ${props.duration} min`}</Typography>
          <Typography paragraph>{props.description}</Typography>
          <Typography>{`Country: ${props.country}`}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default MovieCard;
