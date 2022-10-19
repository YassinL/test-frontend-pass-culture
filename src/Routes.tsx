import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { HomePage } from "./components/pages/HomePage";
import { CreateNewsPage } from "./components/pages/CreateNewsPage";

export const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/create-news-page" component={CreateNewsPage} />
      </Switch>
    </BrowserRouter>
  );
};
