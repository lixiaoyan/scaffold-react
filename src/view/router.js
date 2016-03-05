import React from "react";
import {useRouterHistory, Router, Route} from "react-router";
import {useBasename, createHistory} from "history";

import config from "../config";

import App from "./components/app";
import Home from "./components/home";

const history = useRouterHistory(useBasename(createHistory))({
  basename: config.baseURL.replace(/\/$/, "")
});

export default (
  <Router history={history}>
    <Route component={App}>
      <Route path="/" component={Home} />
    </Route>
  </Router>
);
