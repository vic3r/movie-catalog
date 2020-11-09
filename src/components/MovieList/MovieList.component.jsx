import React from 'react';
import { Grid } from '@material-ui/core';
import MovieCard from '../MovieCard';

const MovieList = ({ movies }) => {
  if (!movies) {
    return <div>Loading...</div>;
  }
  return movies.map((movie) => (
    <Grid item xs={3}>
      <MovieCard key={movie.imdb_title_id} {...movie} />
    </Grid>
  ));
};

export default MovieList;
