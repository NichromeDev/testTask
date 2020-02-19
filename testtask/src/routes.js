import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";

import constants from "./constants";
import {Main} from './pages';

const mainPage = constants.mainPage;

export const useRoutes = () => {
  return (
    <Switch>
      <Route exact path={["", "/", mainPage]} component={Main} />
      <Redirect to={mainPage} />
    </Switch>
  );
};
