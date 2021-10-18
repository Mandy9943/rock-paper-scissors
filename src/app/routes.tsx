import React, { lazy, Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
const routes = () => {
  return (
    <Suspense fallback="loading">
      <Switch>
        <Route
          path="/rock_paper_scissors"
          component={lazy(() => import("./views/pages/rock_paper_scissors"))}
          exact
        />
        <Redirect from="/" to="/rock_paper_scissors" />
      </Switch>
    </Suspense>
  );
};

export default routes;
