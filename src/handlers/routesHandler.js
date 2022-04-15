import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {DataProvider} from './stateManagement';
import LandingPage from '../pages/landingPage';

const RoutesHandler = () => {
  return (
    <BrowserRouter>
      <DataProvider>
        <Switch>
          <Route path={`/`}>
            <LandingPage />
          </Route>
        </Switch>
      </DataProvider>
    </BrowserRouter>
  );
};

export default RoutesHandler;
