import React from "react";
import { Switch, Route } from "react-router-dom";
import AddBlog from "../components/AddBlog";
import Blogs from "../pages/Blogs/Blogs";
const Routes = () => {
  return (
    <Switch>
      <Route path={`/`} component={Blogs} exact />
      <Route path={`/add-blog`} component={AddBlog} exact />
      <Route path={`/edit-blog`} component={AddBlog} exact />
    </Switch>
  );
};

export default Routes;
