import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import Searchbar from '../../components/Searchbar';
import MovieList from '../../components/MovieList';
import { getMovieByName } from '../../utils/apis/movie-api';
import { useMovieContext } from '../../providers/MoviesProvider';

const Home = () => {
  const { movies, setMovies } = useMovieContext();
  const [term, setTerm] = useState('Iron Man');
  useEffect(() => {
    getMovieByName(term)
      .then((fetchMovies) => {
        console.log(fetchMovies.data.results);
        setMovies(fetchMovies.data.results);
      })
      .catch((err) => err);
  }, [term, setMovies]);

  return (
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <Searchbar onTermSubmit={setTerm} />
      </Grid>
      <MovieList movies={movies} />
    </Grid>
  );
};

export default withRouter(Home);
