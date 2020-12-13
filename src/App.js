import React from "react";
import { useSelector } from "react-redux";
import Routes from "./routes/Routes";
import { Router } from "react-router-dom";
import History from "./routes/History";
import Navbar from "./components/Navbar/Navbar";
import Spinner from "./components/Spinner/Spinner";
function App() {
  const {
    spinner: { loader }
  } = useSelector(state => state);
  return (
    <>
      <div className="mb-5">
        <Navbar pageTitle="BLOGS" />
      </div>
      <div className="App w-50 m-auto">
        <Router history={History}>
        {!loader?<Routes />:<Spinner/>}
        </Router>
      </div>
    </>
  );
}

export default App;
