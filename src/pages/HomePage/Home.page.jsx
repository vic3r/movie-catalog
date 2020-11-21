import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import Searchbar from '../../components/Searchbar';
import MovieList from '../../components/MovieList';
import { getMovieByName } from '../../utils/apis/movie-api';
import { useMovieContext } from '../../providers/MoviesProvider';
import useStyles from './styles';

const Home = () => {
  const { movies, setMovies } = useMovieContext();
  const [term, setTerm] = useState('Iron Man');
  const classes = useStyles();
  useEffect(() => {
    getMovieByName(term)
      .then((fetchMovies) => {
        console.log(fetchMovies.data.results);
        setMovies(fetchMovies.data.results);
      })
      .catch((err) => err);
  }, [term, setMovies]);

  return (
    <div className={classes.root}>
      <Searchbar onTermSubmit={setTerm} />
      <Grid className={classes.movies} container spacing={1}>
        <MovieList movies={movies} />
      </Grid>
    </div>
  );
};

export default withRouter(Home);
