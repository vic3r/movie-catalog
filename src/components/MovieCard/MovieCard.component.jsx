import React from 'react';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShopOutlinedIcon from '@material-ui/icons/ShopOutlined';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import useStyles from './styles';
import { addMovie } from '../../utils/apis/movie-api';

const MovieCard = (props) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const purchaseMovie = () => {
    addMovie(props.id)
      .then(() => console.log('purchased'))
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
      />
      <CardMedia className={classes.media} image={props.image} title="Paella dish" />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.year}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="shop" onClick={purchaseMovie}>
          <ShopOutlinedIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
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
