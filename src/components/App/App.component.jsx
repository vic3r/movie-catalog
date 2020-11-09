import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import RootPage from '../../pages/RootPage';
import HomePage from '../../pages/HomePage';
import LoginPage from '../../pages/LoginPage';
import SignUpPage from '../../pages/SignUpPage';
import MoviePage from '../../pages/MoviePage';
import ProfilePage from '../../pages/ProfilePage';
import PurchasePage from '../../pages/PurchasePage';
import PrivateRoute from '../PrivateRoute';
import { history } from '../../_helpers';
import MovieProvider from '../../providers/MoviesProvider';

const App = () => {
  return (
    <div>
      <MovieProvider>
        <Router history={history}>
          <Switch>
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/register" component={SignUpPage} />
            <Route exact path="/profile" component={ProfilePage} />
            <Route exact path="/purchase/:id" component={PurchasePage} />
            <PrivateRoute exact path="/home" component={HomePage} />
            <Route exact path="/movies" component={MoviePage} />
            <Route exact path="/" component={RootPage} />
          </Switch>
        </Router>
      </MovieProvider>
    </div>
  );
};

export default App;
