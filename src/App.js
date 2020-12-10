import Blogs from "./pages/Blogs";
import History from "./routes/History";
import React, { Suspense, useEffect } from "react";
import {
  Switch,
  Redirect,
  useLocation,
  useHistory,
  Route
} from "react-router-dom";
import AddBlog from "./components/AddBlog";
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from "./routes/Routes";

// import history from "./History";

function App() {
  return (
    <div className="App w-50 m-auto">
       <Router>        
        <Routes />      
      </Router>
    </div>
  );
}

export default App;

    // <div className="w-75 m-auto">
      {/* <div className="row">
        <div className="col-md-6">
          <button onClick={()=>History.push('/add-blog')}>Add Blog</button>
        </div>
        <div className="col-md-6"></div>
      </div> */}
      {/* <Blogs /> */}
      {/* <Router history={History}>
        <Switch>
          <Route path={`/`} component={Blogs} exact />
          <Route path={`/add-blog`} component={AddBlog} exact />
        </Switch>
      </Router> */}
    {/* </div> */}