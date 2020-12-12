import React from "react";
import Routes from "./routes/Routes";
import { Router } from "react-router-dom";
import History from "./routes/History";
import Navbar from "./components/Navbar/Navbar";
function App() {
  return (
    <>
    <div className="mb-5">
    <Navbar pageTitle="BLOGS"/>
    </div>
    <div className="App w-50 m-auto">
      <Router history={History}>
        <Routes />
      </Router>
    </div>
    </>
  );
}

export default App;
