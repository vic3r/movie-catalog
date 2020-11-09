import React, { createContext, useContext, useState } from 'react';

const MovieContext = createContext(null);

const useMovieContext = () => {
  const context = useContext(MovieContext);
  if (!context) {
    throw new Error(`Can't use "movie context" without an MovieProvider`);
  }
  return context;
};

const MovieProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);

  return (
    <MovieContext.Provider value={{ movies, setMovies }}>
      {children}
    </MovieContext.Provider>
  );
};

export { useMovieContext };
export default MovieProvider;
