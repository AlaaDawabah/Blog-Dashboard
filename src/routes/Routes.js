import React, { useEffect } from "react";
import {
  Switch,
  Route,
  Router,
  BrowserRouter,
  useHistory,
  useLocation
} from "react-router-dom";
import AddBlog from "../components/AddBlog";
import Blogs from "../pages/Blogs";
import history from "./History"
const Routes = () => {
  const location = useLocation();
  const History = useHistory();
  // useEffect(() => {
  //   History.push({
  //     search: location.search,
  //     state: location.state
  //   });
  // }, []);
  return (
    // <div>
    // <BrowserRouter>
      // <Router history={history}>
      <Switch>
        <Route path={`/`} component={Blogs} exact />
        <Route path={`/add-blog`} component={AddBlog} exact />
        <Route path={`/edit-blog`} component={AddBlog} exact />
      </Switch>
      // </Router>
    // </BrowserRouter>
    // </div>
  );
};

export default Routes;
