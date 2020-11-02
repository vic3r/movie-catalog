import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import RootPage from '../../pages/RootPage';
import HomePage from '../../pages/HomePage';
import LoginPage from '../../pages/LoginPage';
import SignUpPage from '../../pages/SignUpPage';
import MoviePage from '../../pages/MoviePage';
import ProfilePage from '../../pages/ProfilePage';
import PurchasePage from '../../pages/PurchasePage';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/register" component={SignUpPage} />
          <Route exact path="/profile" component={ProfilePage} />
          <Route exact path="/purchase/:id" component={PurchasePage} />
          <Route exact path="/home" component={HomePage} />
          <Route exact path="/movie/:id" component={MoviePage} />
          <Route exact path="/" component={RootPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
