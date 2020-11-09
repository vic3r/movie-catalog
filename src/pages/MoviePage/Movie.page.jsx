import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import Searchbar from '../../components/Searchbar';
import MovieList from '../../components/MovieList';
import { retrieveMovies } from '../../utils/apis/movie-api';
import { useMovieContext } from '../../providers/MoviesProvider';

const Movie = () => {
  const { movies, setMovies } = useMovieContext();
  useEffect(() => {
    retrieveMovies()
      .then((fetchMovies) => {
        console.log(fetchMovies.data.results);
        setMovies(fetchMovies.data.results);
      })
      .catch((err) => err);
  }, [setMovies]);

  return (
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <Searchbar onTermSubmit={() => {}} />
      </Grid>
      <MovieList movies={movies} />
    </Grid>
  );
};

export default withRouter(Movie);
