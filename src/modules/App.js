import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import { UserContextProvider } from '../context/UserContext';
import Dashboard from '../modules/dashboard/';
import { askForPermissioToReceiveNotifications } from '../modules/pushNotification';

function App() {
  useEffect(() => {
    askForPermissioToReceiveNotifications();
  }, []);
  const user = { name: 'John Doe' }; // Get user from localstorage or cookies
  return (
    <>
      <UserContextProvider>
        <Router>
          <Switch>
            {/* <Route path="/login" component={LoginPage} /> */}
            {user ? <Route component={Dashboard} /> : <Redirect to="/login" />}
          </Switch>
        </Router>
      </UserContextProvider>
    </>
  );
}

export default App;
