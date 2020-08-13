import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import { UserContextProvider } from "../context/UserContext";
import Dashboard from "../modules/dashboard/";

function App() {
  return (
    <>
      <UserContextProvider>
        <Router>
          <Switch>
            <Route component={Dashboard} />
          </Switch>
        </Router>
      </UserContextProvider>
    </>
  );
}

export default App;
