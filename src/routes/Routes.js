import React, { Suspense, useEffect } from "react";
import {
  Router,
  Switch,
  Redirect,
  useLocation,
  useHistory,
  Route
} from "react-router-dom";
// import history from "./History";
import AddBlog from "../components/AddBlog";
import Blogs from "../pages/Blogs";

const Routes = () => {
  const history = useHistory();

  return (
    <Router history={history}>
      <Switch>
        <Route path={"/"} component={Blogs} exact />
        <Route path={`/add-blog`} component={AddBlog} exact />
      </Switch>
    </Router>
  );
};

export default Routes;
