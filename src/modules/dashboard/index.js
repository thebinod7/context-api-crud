import React from "react";
import { Route, Switch } from "react-router-dom";

import Header from "../layouts/header";
import Footer from "../layouts/footer";
import Users from "../users";
import EditUser from "../users/Edit";

export default function Index() {
  return (
    <>
      <Header />
      <div className="container" style={{ marginTop: 20 }}>
        <Switch>
          <Route exact path="/" component={Users} />
          <Route exact path="/edit/:id" component={EditUser} />
        </Switch>
        <Footer />
      </div>
    </>
  );
}
